const fs = require('fs');
const path = require('path');

/* recursive true needed to create  multiple folder */


/* creates folder */
fs.mkdir(`${process.cwd()}/assets`,{recursive : true},(err) =>{
    if(err) throw err;
    console.log("assets folder has been successfully created");
}  )


fs.mkdir(`${process.cwd()}/assets/css`,{recursive : true},(err) =>{
    if(err) throw err;
    console.log("assets / css folder has been successfully created");
}  )

fs.mkdir(`${process.cwd()}/assets/scss`,{recursive : true},(err) =>{
    if(err) throw err;
    console.log("assets / css folder has been successfully created");
}  )

fs.mkdir(`${process.cwd()}/assets/js`,{recursive : true},(err) =>{
    if(err) throw err;
    console.log("assets / js folder has been successfully created");
}  )

fs.mkdir(`${process.cwd()}/assets/img`,{recursive : true},(err) =>{
    if(err) throw err;
    console.log("assets / img folder has been successfully created");
}  )

fs.mkdir(`${process.cwd()}/assets/fonts`,{recursive : true},(err) =>{
    if(err) throw err;
    console.log("assets / fonts folder has been successfully created");
}  )

/* creates files */

fs.writeFileSync('assets/css/style.css',' ',successLog);
fs.writeFileSync('assets/scss/style.scss',' ',successLog);
fs.writeFileSync('assets/js/main.js',' ',successLog);
fs.writeFileSync('index.html',' ',successLog);

function successLog(){
    console.log("Yeahhhh files have been created successfully !");
}
