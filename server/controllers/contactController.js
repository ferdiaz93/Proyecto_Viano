const path = require("path");

function getContact(req,res){
    let pathContact = path.join(__dirname,"../../public/contacto.html");
res.sendFile(pathContact);
}

module.exports ={
    getContact : getContact,
}