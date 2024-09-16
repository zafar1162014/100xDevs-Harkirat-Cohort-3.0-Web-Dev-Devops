const bcrypt = require('bcrypt');
const express = require('express');
const { UserModel, TodoModel } = require('./db');
const { auth, JWT_SECRET } = require('./auth');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const { z } = require('zod'); // Import Zod for validation

mongoose.connect(
	'mongodb://zafarulhaq1162014:zafar116@cluster0-shard-00-00.u6xwu.mongodb.net:27017,cluster0-shard-00-01.u6xwu.mongodb.net:27017,cluster0-shard-00-02.u6xwu.mongodb.net:27017/?replicaSet=atlas-s8rk5x-shard-0&ssl=true&authSource=admin'
);

const app = express();
app.use(express.json());

// Zod schemas for input validation with the necessary constraints
const signupSchema = z.object({
	email: z.string().email(), // Email must be a valid email
	password: z
		.string()
		.min(6, 'Password must be at least 6 characters long')
		.max(20, 'Password cannot exceed 20 characters')
		.regex(/[a-z]/, 'Password must contain at least one lowercase letter')
		.regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
		.regex(/\d/, 'Password must contain at least one number'), // Password constraints
	name: z
		.string()
		.min(1, 'Name is required')
		.max(50, 'Name cannot exceed 50 characters'), // Name max 50 chars
});

const signinSchema = z.object({
	email: z.string().email(), // Email validation
	password: z
		.string()
		.min(6, 'Password must be at least 6 characters long')
		.max(20, 'Password cannot exceed 20 characters')
		.regex(/[a-z]/, 'Password must contain at least one lowercase letter')
		.regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
		.regex(/\d/, 'Password must contain at least one number'), // Password constraints
	name: z
		.string()
		.min(1, 'Name is required')
		.max(50, 'Name cannot exceed 50 characters'), // Name validation
});

const todoSchema = z.object({
	title: z
		.string()
		.min(1, 'Title is required')
		.max(100, 'Title cannot exceed 100 characters'), // Title max 100 chars
	done: z.boolean(), // Done must be a boolean
});

// Signup route
app.post('/signup', async function (req, res) {
	const parseResult = signupSchema.safeParse(req.body); // Validate request body with Zod schema

	if (!parseResult.success) {
		return res.status(400).json({ errors: parseResult.error.errors });
	}

	const { email, password, name } = parseResult.data;

	try {
		const existingUser = await UserModel.findOne({ email: email });
		if (existingUser) {
			return res.status(400).json({
				message: 'User already exists',
			});
		}

		const hashPassword = await bcrypt.hash(password, 5);
		await UserModel.create({ email, password: hashPassword, name });

		res.json({ message: 'You are signed up' });
	} catch (error) {
		if (error.code === 11000) {
			return res
				.status(400)
				.json({ message: 'User with this email already exists' });
		}
		console.error(error);
		res.status(500).json({ message: 'An error occurred during signup' });
	}
});

// Signin route with name check
app.post('/signin', async function (req, res) {
	const parseResult = signinSchema.safeParse(req.body); // Validate request body with Zod schema

	if (!parseResult.success) {
		return res.status(400).json({ errors: parseResult.error.errors });
	}

	const { email, password, name } = parseResult.data;

	try {
		const user = await UserModel.findOne({ email });

		if (!user) {
			return res
				.status(403)
				.json({ message: 'User does not exist in our database' });
		}

		// Check if the name matches
		if (user.name !== name) {
			return res.status(403).json({ message: 'Incorrect name' });
		}

		const passwordMatch = await bcrypt.compare(password, user.password);

		if (!passwordMatch) {
			return res.status(403).json({ message: 'Incorrect credentials' });
		}

		const token = jwt.sign({ id: user._id.toString() }, JWT_SECRET);

		res.json({ token });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'An error occurred during sign-in' });
	}
});

// Create Todo route
app.post('/todo', auth, async function (req, res) {
	const parseResult = todoSchema.safeParse(req.body); // Validate request body with Zod schema

	if (!parseResult.success) {
		return res.status(400).json({ errors: parseResult.error.errors });
	}

	const { title, done } = parseResult.data;
	const userId = req.userId;

	try {
		await TodoModel.create({ userId, title, done });
		res.json({ message: 'Todo created' });
	} catch (error) {
		console.error(error);
		res
			.status(500)
			.json({ message: 'An error occurred while creating the todo' });
	}
});

// Get Todos route
app.get('/todos', auth, async function (req, res) {
	const userId = req.userId;

	try {
		const todos = await TodoModel.find({ userId });
		res.json({ todos });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'An error occurred while fetching todos' });
	}
});

app.listen(3000, () => {
	console.log('Server running on port 3000');
});
