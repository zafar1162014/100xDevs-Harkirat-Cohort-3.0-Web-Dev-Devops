const express = require('express');
const app = express();

// Middleware to log HTTP method, URL, and timestamp
function requestLogger(req, res, next) {
	const currentTime = new Date();
	console.log(
		`${req.method} ${req.protocol}://${req.get('host')}${
			req.url
		} - ${currentTime}`
	);
	next();
}

// Use the middleware
app.use(requestLogger);

// Sample routes to handle different HTTP methods
app.get('*', (req, res) => res.send('Hi there!'));
app.post('*', (req, res) => res.send('Hello!'));
app.put('*', (req, res) => res.send('Welcome!'));
app.delete('*', (req, res) => res.send('Goodbye!'));

// Start the server
app.listen(3000, () => console.log('Server is running on port 3000'));
