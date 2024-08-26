#!/usr/bin/env node

import fs from 'fs';

function main(filename) {
	fs.readFile(filename, 'utf8', function (err, data) {
		let count = 0;
		for (let i = 0; i < data.length; i++) {
			if (data[i] === ' ') {
				count++;
			}
		}
		count++;
		console.log(count);
	});
}
main(process.argv[2]);
