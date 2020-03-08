const path = require("path");

function getOurHistory(req, res){
   let pathOurHistory = path.join(__dirname,"../../public/nuestrahistoria.html");
   res.sendFile(pathOurHistory);
}

module.exports ={
   getOurHistory :getOurHistory,
}