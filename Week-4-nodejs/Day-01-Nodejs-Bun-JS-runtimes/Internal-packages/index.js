const fruits = require('./Fruits');
console.log(fruits);
// console.log(fruits[0].name);
// console.log(fruits[0].color);
fruits.forEach((fruit) => {
	console.log(`name : ${fruit.name}  , color : ${fruit.color}`);
});
