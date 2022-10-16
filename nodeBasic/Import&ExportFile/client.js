const lib = require("./lib")

// require - path of the file from where you 
// want to import the functions or variables 
let libExportObj = require("./lib");
console.log("I am a clent file");

console.log(libExportObj.varName);
console.log(libExportObj.fxn());