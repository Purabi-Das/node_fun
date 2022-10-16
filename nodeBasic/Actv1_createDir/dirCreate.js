let fs = require('fs');
let path  = require('path');

let inputArr = process.argv.slice(2);
console.log("inputArr ", inputArr);

let mainDir = inputArr[0];
console.log("mainDir ", mainDir)

let cwd = process.cwd();
console.log(cwd);

let mainDirPath = path.join(cwd, mainDir);
console.log(mainDirPath);

let isMainModulePresent = fs.existsSync(mainDirPath);
console.log(isMainModulePresent);

if(isMainModulePresent) {
    console.log("directory is already created");
    return;
}
else {
     fs.mkdirSync(mainDirPath);
    console.log("directory created");
    
    let topicFromInput = inputArr.slice(1, 4);
    for(let i = 0; i < topicFromInput.length; i++) {
        let currentTopicPath = path.join(mainDirPath, topicFromInput[i]);
        console.log(topicFromInput[i], " Created ");

        fs.mkdirSync(currentTopicPath);

        for(let j = 1; j <= 5; j++) {
            let modulePath = path.join(currentTopicPath, "Module_" + j);
            fs.mkdirSync(modulePath);
            console.log("Module_" + j + " Created inside " , topicFromInput[i]);

            let filePath = path.join(modulePath, "content.md");
            fs.writeFileSync(filePath, "Hello!");
        }
    }
}


