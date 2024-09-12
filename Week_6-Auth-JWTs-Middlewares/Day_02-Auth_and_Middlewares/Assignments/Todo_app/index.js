const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public'));

const JWT_SECRET = 'your_secret_key';
let users = [];
let todos = {};

// Signup route
app.post('/signup', (req, res) => {
	const { username, password } = req.body;
	if (users.find((user) => user.username === username)) {
		return res.status(400).json({ message: 'User already exists' });
	}
	const hashedPassword = bcrypt.hashSync(password, 8);
	users.push({ username, password: hashedPassword });
	todos[username] = [];
	res.json({ message: 'Signup successful' });
});

// Signin route
app.post('/signin', (req, res) => {
	const { username, password } = req.body;
	const user = users.find((user) => user.username === username);
	if (!user || !bcrypt.compareSync(password, user.password)) {
		return res.status(401).json({ message: 'Invalid username or password' });
	}
	const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '1h' });
	res.json({ token });
});

// Middleware to verify token
const authenticateToken = (req, res, next) => {
	const token = req.headers['authorization']?.split(' ')[1];
	if (!token) return res.status(401).json({ message: 'Token required' });
	jwt.verify(token, JWT_SECRET, (err, user) => {
		if (err) return res.status(403).json({ message: 'Invalid token' });
		req.user = user;
		next();
	});
};

// Get TODOs
app.get('/todos', authenticateToken, (req, res) => {
	res.json(todos[req.user.username] || []);
});

// Create TODO
app.post('/todos', authenticateToken, (req, res) => {
	const { text } = req.body;
	const todo = { text, done: false };
	todos[req.user.username].push(todo);
	res.json(todo);
});

// Update TODO
app.patch('/todos/:index', authenticateToken, (req, res) => {
	const index = parseInt(req.params.index);
	const { done, text } = req.body;
	if (index < 0 || index >= todos[req.user.username].length) {
		return res.status(404).json({ message: 'Todo not found' });
	}
	const todo = todos[req.user.username][index];
	if (text !== undefined) todo.text = text;
	if (done !== undefined) todo.done = done;
	res.json(todo);
});

// Delete TODO
app.delete('/todos/:index', authenticateToken, (req, res) => {
	const index = parseInt(req.params.index);
	if (index < 0 || index >= todos[req.user.username].length) {
		return res.status(404).json({ message: 'Todo not found' });
	}
	todos[req.user.username].splice(index, 1);
	res.json({ message: 'Todo deleted' });
});

app.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`);
});
