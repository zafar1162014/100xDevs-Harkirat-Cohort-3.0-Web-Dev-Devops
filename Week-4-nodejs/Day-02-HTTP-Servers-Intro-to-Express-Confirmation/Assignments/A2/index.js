import express from 'express';
import fs from 'fs';

const app = express();
const port = 3000;
const filePath = 'todos.json';

app.use(express.json());

// Function to read todos from the file
function readTodos() {
	try {
		const data = fs.readFileSync(filePath, 'utf8');
		return JSON.parse(data);
	} catch (error) {
		return [];
	}
}

// Function to write todos to the file
function writeTodos(todos) {
	fs.writeFileSync(filePath, JSON.stringify(todos, null, 2));
}

// Initialize todos from file
let todos = readTodos();
let id = todos.length;

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});

// Get all todos
app.get('/todos', (req, res) => {
	todos = readTodos();
	if (!todos.length) {
		res.status(404).send('No todos have been added to your list.');
	} else {
		res.json(todos);
	}
});

// Get todo data for id
app.get('/todos/:id', (req, res) => {
	todos = readTodos();
	const todo = todos.find((t) => t.id === parseInt(req.params.id));
	if (!todo) {
		res.status(404).send('The provided ID does not exist in the list.');
	} else {
		res.status(200).json(todo);
	}
});

// Post new todo
app.post('/todos', (req, res) => {
	const newTodo = {
		id: ++id,
		title: req.body.title,
		description: req.body.description,
	};
	todos.push(newTodo);
	writeTodos(todos);
	res.status(201).json(newTodo);
});

// Put for update
app.put('/todos/:id', (req, res) => {
	todos = readTodos();
	const index = todos.findIndex((t) => t.id === parseInt(req.params.id));
	if (index === -1) {
		res.status(404).send('Invalid input ID.');
	} else {
		todos[index] = {
			...todos[index],
			title: req.body.title,
			description: req.body.description,
		};
		writeTodos(todos);
		res.status(200).json(todos[index]);
	}
});

// Patch for little update
app.patch('/todos/:id', (req, res) => {
	todos = readTodos();
	const index = todos.findIndex((t) => t.id === parseInt(req.params.id));
	if (index === -1) {
		res.status(404).send('Invalid input ID.');
	} else {
		todos[index] = {
			...todos[index],
			...req.body,
		};
		writeTodos(todos);
		res.status(200).json(todos[index]);
	}
});

// Delete todo by id
app.delete('/todos/:id', (req, res) => {
	todos = readTodos();
	const index = todos.findIndex((t) => t.id === parseInt(req.params.id));
	if (index === -1) {
		res.status(404).send('Invalid input ID.');
	} else {
		todos.splice(index, 1);
		writeTodos(todos);
		res.status(200).json('Deleted');
	}
});

export default app;
