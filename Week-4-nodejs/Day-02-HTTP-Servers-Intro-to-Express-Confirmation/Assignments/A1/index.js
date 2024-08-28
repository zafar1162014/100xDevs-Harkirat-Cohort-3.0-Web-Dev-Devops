import express from 'express';
const app = express();
const port = 3000;

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
app.use(express.json());

const todos = [];
let id = 0;

// Get all todos
app.get('/todos', (req, res) => {
	if (!todos.length) {
		res.status(404).send('No todos have been added to your list.');
	} else {
		res.json(todos);
	}
});

// Get todo data for id
app.get('/todos/:id', (req, res) => {
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
	res.status(201).json(newTodo);
});

// Put for update
app.put('/todos/:id', (req, res) => {
	const index = todos.findIndex((t) => t.id === parseInt(req.params.id));
	if (index === -1) {
		res.status(404).send('Invalid input ID.');
	} else {
		todos[index] = {
			...todos[index],
			title: req.body.title,
			description: req.body.description,
		};
		res.status(200).json(todos[index]);
	}
});

// Patch for little update
app.patch('/todos/:id', (req, res) => {
	const index = todos.findIndex((t) => t.id === parseInt(req.params.id));
	if (index === -1) {
		res.status(404).send('Invalid input ID.');
	} else {
		todos[index] = {
			...todos[index],
			...req.body,
		};
		res.status(200).json(todos[index]);
	}
});

// Delete todo by id
app.delete('/todos/:id', (req, res) => {
	const index = todos.findIndex((t) => t.id === parseInt(req.params.id));
	if (index === -1) {
		res.status(404).send('Invalid input ID.');
	} else {
		todos.splice(index, 1);
		--id;
		res.status(200).json('Deleted');
	}
});

export default app;
