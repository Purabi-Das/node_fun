// ************************file******************************************************

// implementation. - > files / folder(directory)
// files = read / write / update / delete 

let fs = require('fs');
let path = require('path');
// let content = fs.readFileSync("C:\\Users\\Purabi\\Desktop\\Dev\\string_intro\\array.js");
// let content = fs.readFileSync("abc.txt");
// using coma instead of + gives buffer value(hexadecimal)
//+ concatinate to string(text)
// console.log("content - " + content);

// write - writeFileSync
// file doesnot exist, then create it and write content to the file
// if file does exist, then overwrite the content
// fs.writeFileSync("f2.txt", "this is abc created file");

// update = fs.appendFileSync
// fs.appendFileSync("f2.txt", "update this file using append function");

// delete = fs.unlinkSync
// fs.unlinkSync("abc.txt");

// console.log("file removed successfully");










// ***********************directory******************************************

// create directory
fs.mkdirSync("makeDirectory");
console.log("successfully created");

// delete / remove directory
fs.rmdirSync("makeDirectory");
console.log("deleted successfully");

// path - check does it exist or not
let doesExist = fs.existsSync("fs.js");
console.log("does exist ?", doesExist);

// check the stats of a path
// let statsOfAPath = fs.statSync("dir");
// console.log("statsOfAPath ", statsOfAPath);

// check path belongs to a directory or file
// console.log("isFile ?", statsOfAPath.isFile());
// console.log("isDirectory ?", statsOfAPath.isDirectory());

// read folder content
// let address = "C:\\Users\\Purabi\\Desktop\\Dev\\nodeBasic";
// let content = fs.readdirSync(address);
// console.log("contents are - > ", content);




// copying file conetent from
let srcFilePath = "C:\\Users\\Purabi\\Desktop\\Dev\\nodeBasic\\f2.txt";
let destDir = "C:\\Users\\Purabi\\Desktop\\Dev\\string_intro";
// baseName = basename method is used to extract the base name of a pathname 
// || returns the filename part of a file path. 
let toBeCopiedFile = path.basename(srcFilePath);
let destPath = path.join(destDir, toBeCopiedFile);
fs.copyFileSync(srcFilePath, destPath);
console.log("successfully executed");
