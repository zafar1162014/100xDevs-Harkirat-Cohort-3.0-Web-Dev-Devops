const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/calculate', (req, res) => {
	const { firstNumber, secondNumber, operator } = req.body;

	if (isNaN(firstNumber) || isNaN(secondNumber)) {
		return res.status(400).json({ error: 'Invalid numbers' });
	}

	if (!['+', '-', '*', '/', '^'].includes(operator)) {
		return res.status(400).json({ error: 'Invalid operator' });
	}

	let result;
	switch (operator) {
		case '+':
			result = firstNumber + secondNumber;
			break;
		case '-':
			result = firstNumber - secondNumber;
			break;
		case '*':
			result = firstNumber * secondNumber;
			break;
		case '/':
			if (secondNumber === 0) {
				return res
					.status(400)
					.json({ error: 'Division by zero is not allowed' });
			}
			result = firstNumber / secondNumber;
			break;
		case '^':
			result = Math.pow(firstNumber, secondNumber);
			break;
		default:
			return res.status(500).json({ error: 'Internal server error' });
	}

	res.json({ result });
});

app.listen(3000, () => {
	console.log('Server is running on http://localhost:3000');
});
