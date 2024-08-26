const fs = require('fs');
const path = require('path');
const filepath = path.join(__dirname, 'a.txt');
fs.readFile(filepath, 'utf8', (err, data) => {
	if (err) {
		console.log(err);
	} else {
		console.log(data);
	}
});
