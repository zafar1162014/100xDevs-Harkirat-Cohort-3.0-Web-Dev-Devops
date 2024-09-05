/*
Assignment #3 - Create a middleware that counts total number of requests sent to a server. 
Also create an endpoint that exposes it
*/
const express = require('express');
const app = express();
const port = 3000;
let reqCount = 0;

function countRequest(req, res, next) {
	reqCount++;
	next();
}

app.use(countRequest);
app.get('/requests-count', (req, res) => {
	res.json({
		totalRequest: reqCount,
	});
});
app.get('/', (req, res) => res.send('Hello, World! a get request'));
app.post('/', (req, res) => res.send('Received a POST request'));

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
