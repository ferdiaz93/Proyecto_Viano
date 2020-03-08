const path = require("path");

function getProductsAndServices(req, res){
   let pathProducts = path.join(__dirname,"../../public/productos.html");
   res.sendFile(pathProducts);
}

module.exports ={
   getProductsAndServices :getProductsAndServices,
}