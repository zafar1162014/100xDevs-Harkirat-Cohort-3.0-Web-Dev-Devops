// A Promise in JavaScript is an object that represents the eventual completion
//     (or failure) of an asynchronous operation and its resulting value.

// callback function 
// function data() {
//     console.log("Zafar");
// }

// function display(callback) {
//     console.log("Data:");
//     callback();  // Call the callback function
// }

// // Use setTimeout to delay the execution of display
// setTimeout(() => display(data), 3000);

// function waitfor3s(resolve) {
//     setTimeout(resolve, 3000);
// }
// function main() {
//     console.log("main is called");
// }
// waitfor3s(main);
// //  promise

// function setTimeoutPromisified(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

// function callback() {
// 	console.log("3 seconds have passed");
// }

// setTimeoutPromisified(3000).then(callback)
// 
// Promisified version
// Now use the promisified version we saw in the last slide
// function setTimeoutPromisified(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// setTimeoutPromisified(1000).then(function () {
//   console.log("hi");
//   setTimeoutPromisified(3000).then(function () {
//     console.log("hello");
//     setTimeoutPromisified(5000).then(function () {
//       console.log("hello there");
//     });
//   });
// });

// alt solution : 
// setTimeoutPromisified(1000)
//   .then(function () {
//     console.log("hi");
//     return setTimeoutPromisified(3000);
//   })
//   .then(function () {
//     console.log("hello");
//     return setTimeoutPromisified(5000);
//   })
//   .then(function () {
//     console.log("hello there");
//   });
// Real life example of promise
function orderStatus(order_data, ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let data = order_data.toLowerCase();
            if (data === "placed") {  
                resolve("Order successfully placed.");
            } else {
                reject("Order not placed / Rejected");
            }
        }, ms);
    });
}

console.log("Fetching data...");

function Check(message) {  
    console.log(message);
}

orderStatus("placed", 5000).then(Check)
orderStatus("placed", 5000).catch(Check);
orderStatus("not_placed", 5000).then(Check).catch(Check);
// Example of using prompt() to get user input
// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('Enter your name: ', (userName) => {
//     console.log("Hello, " + userName + "!");
//     rl.close();
// });
// then and catch
const fs = require("fs");

function readFilePromisified(filePath) {
  return new Promise(function (resolve, reject) {
    fs.readFile(filePath, "utf-8", function (err, data) {
      if (err) {
        reject("Error while reading file");
      } else {
        resolve(data);
      }
    });
  });
}

function onDone(data) {
  console.log(data);
}

function onError(err) {
  console.log("Error: " + err);
}

readFilePromisified("a.txt").then(onDone).catch(onError);