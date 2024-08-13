// function setTimeoutPromisified(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function solve() {
// 	await setTimeoutPromisified(1000);
// 	console.log("hi");
// 	await setTimeoutPromisified(3000);
// 	console.log("hello");
// 	await setTimeoutPromisified(5000);
// 	console.log("hi there");
// }

// solve();
 function getAllData(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data : ", data);
            resolve("Success");
        },2000)
    })
    
 }
// async function getData() {
//     console.log("getting data 1");
//     await getAllData(1);
//     console.log("getting data 2");
//     await getAllData(22);
//     console.log("getting data 3");
//     await getAllData(333);
//     console.log("getting data 4");

//     await getAllData(4444);
// }
// getData();

// IIFE
(async function () {
    console.log("getting data 1");
    await getAllData(1);
    console.log("getting data 2");
    await getAllData(22);
    console.log("getting data 3");
    await getAllData(333);
    console.log("getting data 4");

    await getAllData(4444);
})();