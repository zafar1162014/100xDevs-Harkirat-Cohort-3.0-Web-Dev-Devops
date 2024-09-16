const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const { UserModel, TodoModel } = require('./db');
const JWT_SECRET = 'use_it_Zafar';

mongoose.connect(
	'mongodb://zafarulhaq1162014:<password>@cluster0-shard-00-00.u6xwu.mongodb.net:27017,cluster0-shard-00-01.u6xwu.mongodb.net:27017,cluster0-shard-00-02.u6xwu.mongodb.net:27017/todo-app-Database?replicaSet=atlas-s8rk5x-shard-0&ssl=true&authSource=admin'
);

const app = express();
app.use(express.json());

const authenticateToken = (req, res, next) => {
	const token = req.headers.authorization?.split(' ')[1];
	if (!token) return res.status(401).json({ message: 'Unauthorized' });

	jwt.verify(token, JWT_SECRET, (err, user) => {
		if (err) return res.status(403).json({ message: 'Invalid token' });

		req.userId = user.id;
		next();
	});
};

app.post('/signup', async function (req, res) {
	const { email, password, name } = req.body;

	await UserModel.create({ email, password, name });
	res.json({ message: 'You are signed up' });
});

app.post('/signin', async function (req, res) {
	const { email, password } = req.body;

	const response = await UserModel.findOne({ email, password });
	if (response) {
		const token = jwt.sign({ id: response._id.toString() }, JWT_SECRET);
		res.json({ token });
	} else {
		res.status(403).json({ message: 'Incorrect credentials' });
	}
});

app.post('/todo', authenticateToken, async function (req, res) {
	const { title, done } = req.body;

	await TodoModel.create({
		userId: req.userId,
		title,
		done,
	});

	res.json({ message: 'Todo added' });
});

app.get('/todos', authenticateToken, async function (req, res) {
	const todos = await TodoModel.find({ userId: req.userId });
	res.json({ todos });
});

app.listen(3000, function () {
	console.log('Server is running on port 3000');
});
