const express = require('express');
const { UserModel, TodoModel } = require('./db');
const { auth, JWT_SECRET } = require('./auth');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const port = 3000;
mongoose.connect(
	'mongodb://zafarulhaq1162014:<password>@cluster0-shard-00-00.u6xwu.mongodb.net:27017,cluster0-shard-00-01.u6xwu.mongodb.net:27017,cluster0-shard-00-02.u6xwu.mongodb.net:27017/?replicaSet=atlas-s8rk5x-shard-0&ssl=true&authSource=admin'
);

const app = express();
app.use(express.json());

app.post('/signup', async (req, res) => {
	const { name, email, password } = req.body;
	const isExist = await UserModel.findOne({
		email: email,
	});
	if (isExist) {
		res.status(403).json({ message: 'Given Email  Accound is already Exist' });
		return;
	}
	await UserModel.create({
		name,
		email,
		password,
	});
	res.status(202).json({
		message: 'You are Signup',
	});
});

app.post('/signin', async (req, res) => {
	const { email, password } = req.body;
	const response = await UserModel.findOne({
		email,
		password,
	});
	if (!response) {
		res.status(403).json({ message: 'Incorrect creds' });
		return;
	}
	const token = jwt.sign({ email: response.email }, JWT_SECRET);
	res.status(202).json({
		message: 'you are Signin',
		token,
	});
});

app.post('/todo', auth, async (req, res) => {
	const { title, done } = req.body;
	const userId = req.userId;
	const userEmail = req.userEmail;
	const isExist = await TodoModel.findOne({
		title,
		userEmail,
	});
	if (isExist) {
		res.status(403).json({ message: 'Todo already exists for this user' });
		return;
	}
	await TodoModel.create({
		userEmail,
		title,
		done,
	});
	res.json({ message: 'Todo Created' });
});

app.get('/todos', auth, async (req, res) => {
	const userEmail = req.userEmail;
	const todos = await TodoModel.find({ userEmail });
	if (!todos.length) {
		res.status(403).json({ message: 'No todos exist' });
		return;
	}
	res.status(202).json({
		todos,
	});
});

app.listen(port, () => {
	console.log(`App is listening on port ${port}`);
});
