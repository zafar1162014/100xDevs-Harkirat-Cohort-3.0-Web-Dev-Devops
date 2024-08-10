// function sum(n) {
//   return (n * (n + 1)) / 2;
// }

// part 1
// function sum(a, b) {
// 	return a + b;
// }

// let ans = sum(2, 3)
// console.log(ans);
//part 2
// function sum(n) {
// 	let ans = 0;
// 	for (let i = 1; i <= n; i++) {
// 		ans = ans + i
// 	}
// 	return ans;
// }

// const ans = sum(100);
// console.log(ans);
// part 3
// function sum(n) {
// 	let ans = 0;
// 	for (let i = 1; i <= n; i++) {
// 		ans = ans + i
// 	}
// 	return ans;
// }

// const ans1 = sum(100);
// console.log(ans1);
// const ans2 = sum(1000);
// console.log(ans2);
// const ans3 = sum(10000);
// console.log(ans3);

// part 4
// const fs = require("fs");
// const contents = fs.readFileSync("./a.txt", "utf-8");
// console.log(contents);
// const contents_2 = fs.readFileSync("./b.txt", "utf-8");
// console.log(contents_2);

// part 5
// let ans = 0;
// for (let i = 1; i <= 1000000; i++) {
// 	ans = ans + i
// }
// console.log(ans);
// part6
// const fs = require("fs");

// const contents = fs.readFileSync("./a.txt", "utf-8");
// console.log(contents);

// part 7
// const fs = require("fs");

// fs.readFile("a.txt", "utf-8", function (err, contents) {
//   console.log(contents);
// });

// fs.readFile("b.txt", "utf-8", function (err, contents) {
//   console.log(contents);
// });

// fs.readFile("a.txt", "utf-8", function (err, contents) {
//   console.log(contents);
// });
// part 8
// function sum(a, b) {
//   return a + b;
// }

// function multiply(a, b) {
//   return a * b;
// }

// function subtract(a, b) {
//   return a - b;
// }

// function divide(a, b) {
//   return a / b;
// }

// function doOperation(a, b, op) {
//   return op(a, b)
// }

// console.log(doOperation(1, 2, divide))
// part 9
// const fs = require("fs");

// fs.readFile("./a.txt", "utf-8", function (err, contents) {
//   console.log(contents);
// });

// fs.readFile("./b.txt", "utf-8", function (err, contents) {
//   console.log(contents);
// });

// fs.readFile("./a.txt", "utf-8", function (err, contents) {
//   console.log(contents);
// });
// part 10
// const fs = require("fs");
// function read(err, data) {
//     if (err)
//     {
//         console.log("File not found !")
//     } else {
//     console.log(data);
         
//     }
// }
// fs.readFile("./a23.txt", "utf-8", read);//asynchornously

// fs.readFile("./b.txt", "utf-8", read);//asynchornously
// console.log("Done!")
// part 11

function timeout() {
	console.log("Click the button");
}
console.log("Hi!")
//  i/o intensive
setTimeout(timeout, 1000);
console.log("Welocme to loop");
let c = 0;
// cpu intensive 
for (let i = 0; i < 100000000; i++)
{
    c = c + 1;
}
console.log("Expensive operation done");


