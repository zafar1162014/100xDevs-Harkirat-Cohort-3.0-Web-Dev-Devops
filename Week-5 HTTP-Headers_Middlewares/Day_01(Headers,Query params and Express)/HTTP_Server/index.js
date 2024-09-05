const express = require('express');

const app = express();
const port = 3000;
app.get('/sum', function (req, res) {
	const a = parseInt(req.query.a);
	const b = parseInt(req.query.b);

	if (isNaN(a) || isNaN(b)) {
		return res.status(400).json({ error: 'Invalid input' });
	}

	res.json({
		ans: a + b,
	});
});

app.get('/multiply', function (req, res) {
	const a = parseInt(req.query.a);
	const b = parseInt(req.query.b);

	if (isNaN(a) || isNaN(b)) {
		return res.status(400).json({ error: 'Invalid input' });
	}

	res.json({
		ans: a * b,
	});
});

app.get('/divide', function (req, res) {
	const a = parseInt(req.query.a);
	const b = parseInt(req.query.b);

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

app.get('/subtract', function (req, res) {
	const a = parseInt(req.query.a);
	const b = parseInt(req.query.b);

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
