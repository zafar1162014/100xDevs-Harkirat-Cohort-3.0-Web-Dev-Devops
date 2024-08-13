//  Callback approach
// const fs = require("fs");
// function cleanFile(filePath, cb) {
//   fs.readFile(filePath, "utf-8", function (err, data) {
//     if (err) {
//       console.error("Error reading file:", err);
//       return;
//     }
//     data = data.trim();
//     fs.writeFile(filePath, data, function (err) {
//       if (err) {
//         console.error("Error writing file:", err);
//         return;
//       }
//       cb();
//     });
//   });
// }


// function onDone() {
//   console.log("file has been cleaned");
// }
// cleanFile("a.txt", onDone);
// promise approach
const fs = require("fs");
function cleanFile(filePath, cb) {
  return new Promise(function (resolve) {
    fs.readFile(filePath, "utf-8", function (err, data) {
      data = data.trim();
      fs.writeFile(filePath, data, function () {
        resolve();
      });
    });
  });
}

async function main() {
  await cleanFile("a.txt");
  console.log("Done cleaning file");
}

main();