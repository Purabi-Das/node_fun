let fs = require('fs');
let path = require('path');

let types = {
    media: ["mp4", "mkv", "mp3"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex', 'png', 'jpg'],
    app: ['exe', 'dmg', 'pkg', "deb", "ppt"]
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
        // console.log(allTheFiles);

        // extension check and classify which files belongs to which folder
        for(let i = 0; i < allTheFiles.length; i++) {
            let fullOriginalPath = path.join(srcPath, allTheFiles[i]);
            // console.log(fullOriginalPath);
            
            if(fs.lstatSync(fullOriginalPath).isFile() == true) {
                let folderName = extnChecker(allTheFiles[i]);
                // console.log(allTheFiles[i] + " belongs to —> " + folderName);
                
                copyFileToDestDir(folderName, fullOriginalPath, organizedFilePath);
            }
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

function copyFileToDestDir(folderName, fullOriginalPath, organizedFilePath) {
    let desFolderPath = path.join(organizedFilePath, folderName);

    if(fs.existsSync(desFolderPath) == false) 
        fs.mkdirSync(desFolderPath);

        let originalFileName = path.basename(fullOriginalPath);
        // console.log("originalFileName ↠► " + originalFileName);
        let destFilePath = path.join(desFolderPath, originalFileName);

        fs.copyFileSync(fullOriginalPath, destFilePath);
        console.log("originalFileName copied to ▶ " + destFilePath);
}

module.exports = {
    organizeFxn : organizeFn
}