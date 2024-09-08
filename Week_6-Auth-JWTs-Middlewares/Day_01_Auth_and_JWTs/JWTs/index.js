const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const port = 3000;
app.use(express.json());

const JWT_SECRET = 'user_App';

const users = [];

app.post('/signup', (req, res) => {
	const username = req.body.username;
	const password = req.body.password;

	users.push({ username, password });
	res.json({ message: 'You are signed up' });
});

app.post('/signin', (req, res) => {
	const username = req.body.username;
	const password = req.body.password;
	const user = users.find(
		(user) => user.username === username && user.password === password
	);

	if (user) {
		const token = jwt.sign(
			{
				username: user.username,
			},
			JWT_SECRET
		);

		user.token = token;
		res.send({
			token,
		});
		console.log(user);
	} else {
		res.status(401).json({ message: 'Invalid username or password' });
	}
});

app.get('/me', (req, res) => {
	const token = req.headers.authorization;
	if (!token) {
		return res.status(401).json({ message: 'No token provided' });
	}

	try {
		const userDetails = jwt.verify(token, JWT_SECRET);
		const username = userDetails.username;
		const user = users.find((user) => user.username === username);

		if (user) {
			res.json({
				username: user.username,
			});
		} else {
			res.status(404).json({ message: 'User not found' });
		}
	} catch (error) {
		res.status(401).json({ message: 'Invalid token' });
	}
});

app.listen(port, () => {
	console.log(`App is listening on port ${port}`);
});
