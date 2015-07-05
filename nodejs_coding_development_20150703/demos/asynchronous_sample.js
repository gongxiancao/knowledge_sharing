var fs = require('fs');

console.log('reading file1.txt....');
fs.readFile('./file1.txt', function (err, data) {
  if(err) {
    throw err;
  }
  console.log("file1.txt contents: " + data);
});

console.log('reading file2.txt....');
fs.readFile('./file2.txt', function (err, data) {
  if(err) {
    throw err;
  }
  console.log("file2.txt contents: " + data);
});





