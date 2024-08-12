const fs = require('fs');

fs.readFile('a.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log("file not found");
    }
    else
  console.log('File content:', data);
    
});
// untracked file    print first not to have a wait 

fs.readFile('abc.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log("file not found");
    }
    else
  console.log('File content:', data);
    
});