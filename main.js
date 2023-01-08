const fs = require('fs');
const path = require('path');

/* generates assets folder */
/* fs.mkdir("assets",folderGenerated);
function folderGenerated(){
    console.log("Folder was successfully created.");
}
 */


/* recursive true needed to create multiple folder */

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


/* datei erstellen  */
/* fs.appendFile('index.html','<link rel="stylesheet" href="./assets/css/style.css"<script src="./assets/js/main.js"></script>>' ,fileLog)

function fileLog (){
    console.log("yeAAAyy index file created");
} */

fs.appendFile('index.html','hi' ,fileLog)

function fileLog (){
    console.log("yeAAAyy index file created");
}

