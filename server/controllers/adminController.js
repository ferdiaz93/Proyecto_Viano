const fs = require("fs");
const path = require("path");

function getAdmin(req, res){
let pathAdmin = path.join(__dirname,"../../public/login.html");
res.sendFile(pathAdmin);
}

const credential={
    user: "alan",
    password: "pato"
}

function getAdminTest(req, res){
    if (req.query.user== credential.user && req.query.password==credential.password){
        console.log(req.query)
        res.send("llego");
    }
    else{
        res.send("No llego nada");
    }  
}


function postReplace(req, res){
    console.log('test')
    fs.writeFile('./server/helloworld.txt', 'pato!', function(err){
        if(err) {
            return console.log(err);
        }
        console.log("OK!"); 
    })

}

module.exports ={
    getAdmin : getAdmin,
    getAdminTest :getAdminTest,
    postReplace : postReplace,
}