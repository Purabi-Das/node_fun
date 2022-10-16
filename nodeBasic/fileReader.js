let fs = require('fs');
let path = require('path');

let inputDir = process.argv.slice(2)[0];
let allEntities = fs.readdirSync(inputDir = path.join(__dirname, ''));
// console.log(allEntities);
let content = " ";

for(let i = 0; i < allEntities.length; i++) {
    // console.log(allEntities[i]);

    let fullPath = path.join(inputDir = path.join(__dirname, ''), allEntities[i]);
    let statsOfPath = fs.lstatSync(fullPath);

    if(statsOfPath.isFile()) {
        let ext = path.extname(fullPath);
        console.log(ext);

        if(ext == ".txt")
        content += fs.readFileSync(fullPath);
        // console.log(content);
    }
}

let filePath = path.join(inputDir, "myFile.txt");
    fs.writeFileSync(filePath, content);
    console.log("file created successfully!");