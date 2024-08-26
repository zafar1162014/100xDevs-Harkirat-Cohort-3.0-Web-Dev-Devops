// Process Portion
// process => provides information about, and control over,the current Node ,js process
// console.log(process);give all details about process

//console.log(process.[give any method]);

// ***************** New Portion *****************
// process object contain agrv : return array containing the commmand -line arguments passed when Node.js  process was launched
// console.log(process.argv); // 0 index give bin dir 1 give cwd after onwards value given in cli
// node process.js hi how are you // the hi how are store in index 2 ,3 onwords
let args = process.argv;
for (let i = 2; i < args.length; i++) {
	console.log('hello to ', args[i]); 
}
