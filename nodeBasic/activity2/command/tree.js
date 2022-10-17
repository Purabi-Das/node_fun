let fs = require('fs');
let path = require('path');

function treeFn(srcPath) {
    // console.log("tree command executed with", src);  //example

    if(srcPath == undefined) 
        srcPath = process.cwd();

        let content = fs.readdirSync(srcPath);
        // console.log(content);

        let parentFolder = path.basename(srcPath);

        let completePath = "|--" + parentFolder 

        for(let i = 0; i < content.length; i++) {
            completePath = completePath + "\n\t" + "|——" + content[i];
        }
        console.log(completePath);
}

module.exports = {
    treeFxn : treeFn
}