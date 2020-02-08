const path = require("path");

function getHome (req,res){
let pathHome = path.join(__dirname, "../../public/html/home.html");
res.sendFile(pathHome);
}

module.exports ={
    getHome : getHome
}