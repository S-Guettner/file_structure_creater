const fs = require('fs');
const path = require('path');

/* generates assets folder */
/* fs.mkdir("assets",folderGenerated);
function folderGenerated(){
    console.log("Folder was successfully created.");
}
 */
fs.mkdir(`${process.cwd()}/assets/css`,{recursive : true},(err) =>{
    if(err) throw err;
    console.log("YaaYYYY");
}  )

fs.mkdir(`${process.cwd()}/assets/js`,{recursive : true},(err) =>{
    if(err) throw err;
    console.log("YaaYYYY");
}  )

fs.mkdir(`${process.cwd()}/assets/img`,{recursive : true},(err) =>{
    if(err) throw err;
    console.log("YaaYYYY");
}  )

fs.mkdir(`${process.cwd()}/assets/fonts`,{recursive : true},(err) =>{
    if(err) throw err;
    console.log("YaaYYYY");
}  )

