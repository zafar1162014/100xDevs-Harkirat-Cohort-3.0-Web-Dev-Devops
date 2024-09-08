const express = require('express');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const { z } = require('zod');
const { decode } = require('punycode');

const app = express();
const port = 3000;
const JWT_SECRET = 'user_App';

app.use(express.json());

const userSchema = z.object({
	username: z.string().min(3).max(20),
	password: z
		.string()
		.min(6)
		.max(30)
		.regex(/[a-z]/, {
			message: 'Password must contain at least one lowercase letter',
		})
		.regex(/[A-Z]/, {
			message: 'Password must contain at least one uppercase letter',
		})
		.regex(/[0-9]/, { message: 'Password must contain at least one digit' })
		.regex(/\W/, {
			message: 'Password must contain at least one special character',
		}),
});

const loadUsers = () => {
	try {
		const data = fs.readFileSync('data.json');
		return JSON.parse(data);
	} catch (error) {
		return [];
	}
};

const saveUsers = (users) => {
	fs.writeFileSync('data.json', JSON.stringify(users, null, 2));
};

const users = loadUsers();

app.post('/signup', (req, res) => {
	try {
		userSchema.parse(req.body);
		const { username, password } = req.body;

		const existingUser = users.find((user) => user.username === username);
		if (existingUser) {
			return res.status(400).json({ message: 'Username already exists' });
		}

		users.push({ username, password });
		saveUsers(users);
		res.json({ message: 'You are signed up' });
	} catch (error) {
		res.status(400).json({ message: 'Invalid input', error: error.errors });
	}
});

app.post('/signin', (req, res) => {
	try {
		userSchema.parse(req.body);
		const { username, password } = req.body;
		const user = users.find(
			(user) => user.username === username && user.password === password
		);

		if (user) {
			const token = jwt.sign({ username: user.username }, JWT_SECRET);

			user.token = token;
			saveUsers(users);
			res.send({ token });
		} else {
			res.status(401).json({ message: 'Invalid username or password' });
		}
	} catch (error) {
		res.status(400).json({ message: 'Invalid input', error: error.errors });
	}
});
function auth(req, res, next) {
	const token = req.headers.authorization;
	if (token) {
		jwt.verify(token, JWT_SECRET, (err, decoded) => {
			if (err) {
				return res.status(401).json({
					message: 'Unauthorized',
				});
			}
			req.user = decoded;
			next();
		});
	} else {
		res.status(401).json({
			message: 'Unauthorized',
		});
	}
}
app.get('/me', auth, (req, res) => {
	const user = req.user;
	res.send({
		username: user.username,
	});
});

app.listen(port, () => {
	console.log(`App is listening on port ${port}`);
});
