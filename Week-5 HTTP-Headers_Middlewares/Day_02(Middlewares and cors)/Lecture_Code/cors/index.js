const express = require('express');
// const cors = require('cors');

const app = express();

app.use(express.json());
// app.use(cors());
app.get('/', (req, res) => {
	res.sendFile(__dirname + '/public/index.html');
});
app.post('/sum', (req, res) => {
	const a = parseInt(req.body.a);
	const b = parseInt(req.body.b);
	res.json({
		ans: a + b,
	});
});
app.listen(3000);
