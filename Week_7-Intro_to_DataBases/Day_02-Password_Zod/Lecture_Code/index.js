const express = require('express');
const bcrypt = require('bcrypt');
const { UserModel, TodoModel } = require('./db');
const {
	jwt,
	auth,
	JWT_SECRET,
	userSigninValid,
	userSignupValid,
	todoValid,
} = require('./auth');
const mongoose = require('mongoose');
const port = 3000;
mongoose.connect(
	'mongodb://zafarulhaq1162014:zafar116@cluster0-shard-00-00.u6xwu.mongodb.net:27017,cluster0-shard-00-01.u6xwu.mongodb.net:27017,cluster0-shard-00-02.u6xwu.mongodb.net:27017/?replicaSet=atlas-s8rk5x-shard-0&ssl=true&authSource=admin'
);
const app = express();
app.use(express.json());

app.post('/signup', async (req, res) => {
	const parseResult = userSignupValid.safeParse(req.body);
	if (!parseResult.success) {
		return res.status(400).json({ errors: parseResult.error.errors });
	}
	const { name, email, password } = parseResult.data;
	try {
		const isExist = await UserModel.findOne({ email });
		if (isExist) {
			return res.status(400).json({ message: 'User Already Signup' });
		}
		const hashPassword = await bcrypt.hash(password, 5);
		await UserModel.create({ name, email, password: hashPassword });
		res.status(200).json({ message: 'You are signed up' });
	} catch (error) {
		res.status(500).json({ message: 'An error Occur in Singup' });
	}
});
app.post('/signin', async (req, res) => {
	const parseResult = userSigninValid.safeParse(req.body);
	if (!parseResult.success) {
		return res.status(400).json({ message: 'Send Corect req.body' });
	}
	const { email, password } = parseResult.data;
	const user = await UserModel.findOne({ email });
	try {
		if (!user) {
			return res
				.status(403)
				.json({ message: 'User does not exist in our database' });
		}
		const hashPassword = await bcrypt.compare(password, user.password);
		if (!hashPassword) {
			return res.status(403).json({ message: 'Incorrect credentials' });
		}
		const token = await jwt.sign({ email }, JWT_SECRET);
		res.json({ token });
	} catch (error) {
		res.status(500).json({ message: 'An error occurred during sign-in' });
	}
});
// todo portion

app.post('/todo', auth, async (req, res) => {
	const parseResult = todoValid.safeParse(req.body);
	const userEmail = req.userEmail;

	if (!parseResult.success) {
		return res.status(400).json({ message: 'invalid Todo list' });
	}

	try {
		const { title, done } = parseResult.data;
		const isExist = await TodoModel.findOne({
			title,
			userEmail,
		});
		if (isExist) {
			return res
				.status(403)
				.json({ message: 'Todo already exists for this user' });
		}
		await TodoModel.create({ userEmail, title, done });
		res.status(200).json({ message: 'Todo Created' });
	} catch (error) {
		return res
			.status(500)
			.json({ message: 'An error occurred during adding todo list' });
	}
});
// Get Todos route

app.get('/todos', auth, async (req, res) => {
	const userEmail = req.userEmail;
	if (!userEmail) {
		return res
			.status(400)
			.json({ message: 'please login before getting todos' });
	}
	const todos = await TodoModel.find({ userEmail });

	try {
		if (!todos.length) {
			return res.status(400).json({ message: 'No todo is added yet ' });
		}
		res.status(200).json({
			todos,
		});
	} catch (error) {
		res
			.status(500)
			.json({ message: 'An error occurred while retrieving todos' });
	}
});
// delete todo
app.delete('/todo/:id', auth, async (req, res) => {
	const todoId = req.params.id;
	const userEmail = req.userEmail;

	try {
		const todo = await TodoModel.findOneAndDelete({ _id: todoId, userEmail });
		if (!todo) {
			return res
				.status(404)
				.json({ message: 'Todo not found or unauthorized' });
		}
		res.status(200).json({ message: 'Todo deleted successfully' });
	} catch (error) {
		res
			.status(500)
			.json({ message: 'An error occurred while deleting the todo' });
	}
});
//
app.patch('/todo/:id', auth, async (req, res) => {
	const todoId = req.params.id;
	const { title, done } = req.body;
	const userEmail = req.userEmail;

	try {
		const todo = await TodoModel.findOneAndUpdate(
			{ _id: todoId, userEmail },
			{ title, done },
			{ new: true }
		);
		if (!todo) {
			return res
				.status(404)
				.json({ message: 'Todo not found or unauthorized' });
		}
		res.status(200).json({ message: 'Todo updated successfully', todo });
	} catch (error) {
		res
			.status(500)
			.json({ message: 'An error occurred while updating the todo' });
	}
});
app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
