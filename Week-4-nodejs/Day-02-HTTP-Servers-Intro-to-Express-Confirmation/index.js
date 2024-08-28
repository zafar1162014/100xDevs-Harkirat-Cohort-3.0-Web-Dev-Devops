// import express from 'express';
// const app = express();
// let port = 3000;
// app.listen(port, () => {
// 	console.log(`app is listening on port ${port}`);
// });
// app.use((req, res) => {
// 	console.log('request received');
// 	// res.send('this is a basic response ');
// 	// res.send({
// 	// 	name: 'apple',
// 	// 	color: 'red',
// 	// });
// 	let code =
// 		'<h1>Fruits</h1><ul><li>apple</li> <li>orange</li><li>mango</li></ul>';

// 	res.send(code);
// });

// for one port use one response that's why i put comment on use
// app.get('/', (req, res) => {
// 	res.send('you contacted main path');
// });
// app.get('/apple', (req, res) => {
// 	res.send('you contacted apple path');
// });
// app.get('/orange', (req, res) => {
// 	res.send('you contacted orange path');
// });
// app.get('*', (req, res) => {
// 	res.send('this path does not exist');
// });
// app.post('/', (req, res) => {
// 	res.send('you send a post request');
// });
// for variable path
// app.get('/:username/:id', (req, res) => {
// 	let { username, id } = req.params;
// 	// console.log(req.params);
// 	res.send(`<h1>welcome to the page of @${username}</h1>`);
// });
// app.get('/search', (req, res) => {
// 	// console.log(req.query);
// 	let { q } = req.query;
// 	if (!q) {
// 		res.send('nothing searched');
// 	}
// 	res.send(`search results for  query : ${q}`);
// });
import express from 'express';

const app = express();
app.use(express.json());

let student = [];

// get all student data
app.get('/students', (req, res) => {
	res.json(student);
});

// get student data by their id
app.get('/students/:rollnumber', (req, res) => {
	const rno = student.find(
		(t) => t.rollnumber === parseInt(req.params.rollnumber)
	);
	if (!rno) {
		res.status(404).send('Student not found');
	} else {
		res.json(rno);
	}
});

// post a new student
app.post('/students', (req, res) => {
	const newStudent = {
		rollnumber: req.body.rollnumber,
		name: req.body.name,
		Grade: req.body.Grade,
	};
	student.push(newStudent);
	res.status(201).json(newStudent);
});
// put to update an existing student data
app.put('/students/:rno', (req, res) => {
	const index = student.findIndex(
		(s) => s.rollnumber === parseInt(req.params.rno)
	);

	if (index === -1) {
		res.status(404).send('Student roll number is not found');
	} else {
		// Update the student data
		student[index] = {
			...student[index],
			name: req.body.name,
			Grade: req.body.Grade,
		};
		res.json(student[index]);
	}
});
// patch  for partial update data
app.patch('/students/:rno', (req, res) => {
	const index = student.findIndex(
		(s) => s.rollnumber === parseInt(req.params.rno)
	);
	if (index === -1) {
		res.status(404).send('Student roll number is not found');
	} else {
		// Update the student data
		student[index] = {
			...student[index],
			...req.body,
		};
		res.json(student[index]);
	}
});
// delete student data
app.delete('/students/:rno', (req, res) => {
	const index = student.findIndex(
		(s) => s.rollnumber === parseInt(req.params.rno)
	);
	if (index == -1) {
		res.status(404).send('Student data not found ');
	} else {
		student.splice(index, 1);
		res.status(204).send();
	}
});

const port = 3000;
app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});

export default app;
