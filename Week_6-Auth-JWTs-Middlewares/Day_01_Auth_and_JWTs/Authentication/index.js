const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

function generateToken() {
	const options =
		'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

	let token = '';
	for (let i = 0; i < 32; i++) {
		token += options[Math.floor(Math.random() * options.length)];
	}
	return token;
}

const users = [];

app.post('/signup', (req, res) => {
	const username = req.body.username;
	const password = req.body.password;

	users.push({ username, password });
	res.json({ message: 'You are signed up ' });
});

app.post('/signin', (req, res) => {
	const username = req.body.username;
	const password = req.body.password;
	const user = users.find(
		(u) => u.username === username && u.password === password
	);

	if (user) {
		const token = generateToken(); // Generate the token
		user.token = token; // Assign the token to the user

		console.log('User signed in:', user); // Log the signed-in user details

		res.json({
			message: 'You are signed in',
			username: user.username,
			token: user.token,
		});
	} else {
		res.status(403).json({ message: 'Invalid username or password' });
	}
});

app.get('/me', (req, res) => {
	const token = req.headers.authorization;
	const user = users.find((user) => user.token === token);
	if (user) {
		res.send({
			username: user.username,
		});
	} else {
		res.status(401).send({
			message: 'Unauthorized',
		});
	}
});

app.listen(port, () => {
	console.log(`app is listening on ${port}`);
});
