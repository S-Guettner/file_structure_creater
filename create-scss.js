/* node modules */
const fs = require('fs');
const path = require('path');


/* recursive true needed to create  multiple folder */
/* creates folder */
fs.mkdir(`${process.cwd()}/assets`,{recursive : true},(err) =>{
    if(err) throw err;
    console.log("assets folder has been successfully created 🥳");
}  )
fs.mkdir(`${process.cwd()}/assets/css`,{recursive : true},(err) =>{
    if(err) throw err;
    console.log("assets / css folder has been successfully created 🥳");
}  )
fs.mkdir(`${process.cwd()}/assets/scss`,{recursive : true},(err) =>{
    if(err) throw err;
    console.log("assets / scss folder has been successfully created 🥳");
}  )
fs.mkdir(`${process.cwd()}/assets/js`,{recursive : true},(err) =>{
    if(err) throw err;
    console.log("assets / js folder has been successfully created 🥳");
}  )
fs.mkdir(`${process.cwd()}/assets/img`,{recursive : true},(err) =>{
    if(err) throw err;
    console.log("assets / img folder has been successfully created 🥳");
}  )
fs.mkdir(`${process.cwd()}/assets/fonts`,{recursive : true},(err) =>{
    if(err) throw err;
    console.log("assets / fonts folder has been successfully created 🥳");
}  )

/* creates files */
let fileCreator = () =>{
    fs.writeFileSync('assets/css/style.css','', () => console.log("style.css has been created 🥳"));
    fs.writeFileSync('assets/scss/style.scss','', () => console.log("style.scss has been created 🥳"));
    fs.writeFileSync('assets/scss/_mixins.scss','', () => console.log("_mixins.scss has been created 🥳"));
    fs.writeFileSync('assets/scss/_variables.scss','', () => console.log("_variables.scss has been created 🥳"));
    fs.writeFileSync('assets/scss/_media-queries.scss','', () => console.log("_media-queries.scss has been created 🥳"));
    fs.writeFileSync('assets/js/main.js','', () => console.log("main.js has been created 🥳"));
    fs.writeFileSync('index.html','', () => console.log("index.html has been created 🥳"));
}
setTimeout(fileCreator(), 1000);

console.log("If there is an error delete folder and files if created and try again");