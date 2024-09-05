/*
## Assignment #1 - Create an HTTP Server

1. http://localhost:3000/sum/1/2
2. http://localhost:3000/subtract/1/2
3. http://localhost:3000/multiply/1/2
4. http://localhost:3000/divide/1/2
*/
const express = require('express');

const app = express();
const port = 3000;
app.get('/sum/:a/:b', function (req, res) {
	const a = parseInt(req.params.a);
	const b = parseInt(req.params.b);

	if (isNaN(a) || isNaN(b)) {
		return res.status(400).json({ error: 'Invalid input' });
	}

	res.json({
		ans: a + b,
	});
});

app.get('/multiply/:a/:b', function (req, res) {
	const a = parseInt(req.params.a);
	const b = parseInt(req.params.b);

	if (isNaN(a) || isNaN(b)) {
		return res.status(400).json({ error: 'Invalid input' });
	}

	res.json({
		ans: a * b,
	});
});

app.get('/divide/:a/:b', function (req, res) {
	const a = parseInt(req.params.a);
	const b = parseInt(req.params.b);

	if (isNaN(a) || isNaN(b)) {
		return res.status(400).json({ error: 'Invalid input' });
	}

	if (b === 0) {
		return res.status(400).json({ error: 'Cannot divide by zero' });
	}

	res.json({
		ans: a / b,
	});
});

app.get('/subtract/:a/:b', function (req, res) {
	const a = parseInt(req.params.a);
	const b = parseInt(req.params.b);

	if (isNaN(a) || isNaN(b)) {
		return res.status(400).json({ error: 'Invalid input' });
	}

	res.json({
		ans: a - b,
	});
});

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
