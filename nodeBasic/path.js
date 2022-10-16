let path = require('path');
let fs = require('fs');

// taking input
let inputArr = process.argv.slice(2);
console.log(inputArr);

let fileName = inputArr[0];
let fileContent = inputArr[1];
console.log("fileName " , fileName);
console.log("fileContent " , fileContent);

// find current path of directory
let currentPath = process.cwd();
console.log("currentPath " , currentPath);

// path is platform independent, hence it's used for
// e.g -
// let joinedPath = path.join(currentPath, "Abc", "def", "ghi");
// console.log("joinedPath " , joinedPath);

let filePath = path.join(currentPath, "newDir", fileName);
console.log("filePath " , filePath);
console.log("path created");

fs.writeFileSync(fileName, fileContent);


