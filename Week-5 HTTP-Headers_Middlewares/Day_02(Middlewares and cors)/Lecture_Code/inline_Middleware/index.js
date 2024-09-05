const express = require('express');

const app = express();
const port = 3000;
// use 1

app.use(function (req, res, next) {
	console.log('request received');
	next();
});

// use 2
// app.use(function (req, res, next) {
// 	req.name = 'harkirat';
// 	// if you want to ending the request and respoonse cycle uncomment below response
// 	// res.json({
// 	// 	message: 'You are not allowed',
// 	// });
// 	next();
// });

app.get('/sum', function (req, res) {
	// console.log(req.name); // comment it if uncomment use 1
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
