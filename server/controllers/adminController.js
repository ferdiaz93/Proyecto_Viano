const path = require("path");

function getAdmin(req, res){
let pathAdmin = path.join(__dirname,"../../public/html/login.html");
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

module.exports ={
    getAdmin : getAdmin,
    getAdminTest :getAdminTest,
}