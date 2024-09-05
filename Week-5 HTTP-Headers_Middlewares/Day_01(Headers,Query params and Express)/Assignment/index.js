const express = require('express');
const app = express();
const port = 3000;
const req_limit = 5;
const reqCount = {};

function rateLimiter(req, res, next) {
	const userIp = req.ip;
	if (!reqCount[userIp]) {
		reqCount[userIp] = 0;
	}
	reqCount[userIp]++;
	if (reqCount[userIp] > req_limit) {
		return res
			.status(429)
			.json({ message: 'To many Request. Please try again Later' });
	}
	next();
}
app.use(rateLimiter);
app.get('/requests-count', (req, res) => {
	const counts = Object.values(reqCount);
	let totalRequest = 0;
	counts.forEach((count) => {
		totalRequest += count;
	});

	res.json({ totalRequest });
});

app.get('/', (req, res) => res.send('Hello, World!'));
app.post('/', (req, res) => res.send('Received a POST request'));

// Start the server
app.listen(port, () => console.log(`Server is running on port ${port}`));
