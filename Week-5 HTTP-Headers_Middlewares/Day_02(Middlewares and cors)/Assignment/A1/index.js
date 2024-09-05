/*
Assignment #1 - Create a middleware function that logs each incoming request’s HTTP method, URL, and timestamp to the console
*/

// Import the express module and store it in a variable called express
const express = require('express');

// Create an express application instance and store it in a variable called app
const app = express();

// Middleware function to print HTTP method, URL, and timestamp to the console for each incoming request
function requestLogger(req, res, next) {
	console.log(` Request Method : ${req.method} \n
		URL: ${req.protocol}://${req.get('host')}${req.url} \n
		Date: ${new Date()}
		`);

	next();
}

app.use(requestLogger);

app.get('*', (req, res) => {
	res.send('Hi there!');
});

app.post('*', (req, res) => {
	res.send('Hello!');
});

app.put('*', (req, res) => {
	res.send('Welcome!');
});

app.delete('*', (req, res) => {
	res.send('Goodbye!');
});

app.listen(3000, () => {
	console.log('Server is running on port 3000');
});
