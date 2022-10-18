let fs = require('fs');
let path = require('path');

let types = {
    media: ["mp4", "mkv", "mp3"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex', 'png', 'jpg'],
    app: ['exe', 'dmg', 'pkg', "deb"]
}

function organizeFn(srcPath) {
    // console.log("organize command executed with", src);
   
    if(srcPath == undefined) 
        srcPath = process.cwd();

        // create organized File  Path
        let organizedFilePath = path.join(srcPath, 'organized_Files');
        if(fs.existsSync(organizedFilePath) == false) {
            fs.mkdirSync(organizedFilePath);
        }

        // scan the entire organizedFilePath
        let allTheFiles = fs.readdirSync(srcPath);
        console.log(allTheFiles);

        for(let i = 0; i < allTheFiles.length; i++) {
            let folderName = extnChecker(allTheFiles[i]);
            console.log(allTheFiles[i] + " belongs to —> " + folderName);
        }

}



function extnChecker(fileName) {
    let extnName = path.extname(fileName);
    extnName = extnName.slice(1);

    for(let key in types) {
        for(let i = 0; i < types[key].length; i++) {
            if(extnName == types[key][i]) 
                return key;
        }
    }

    return "Others";
}

module.exports = {
    organizeFxn : organizeFn
}