// it is use for require
// const sum = (a, b) => a + b;
// const mul = (a, b) => a * b;
// const g = 9.8;
// const PI = 3.14;

// way one
// const obj = {
// 	sum,
// 	mul,
// 	g,
// 	PI,
// };

// module.exports = obj; // export to other file it is object  it return by default
// way 2
// module.exports = {
// 	sum,
// 	mul,
// 	g,
// 	PI,
// };
// way 3
module.exports.sum = (a, b) => a + b;
module.exports.mul = (a, b) => a * b;
module.exports.g = 9.8;
module.exports.PI = 3.14;
//  way 4
// exports.sum = (a, b) => a + b;
// exports.mul = (a, b) => a * b;
// exports.g = 9.8;
// exports.PI = 3.14;
