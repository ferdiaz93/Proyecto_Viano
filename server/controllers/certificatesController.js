const path = require("path");

function getCertificates(req, res){
let pathCertificates = path.join(__dirname,"../../public/html/certificaciones.html");
res.sendFile(pathCertificates);
}

function getCertificateRUMP(req, res){
let pathCertificateRUMP = path.join(__dirname,"../../public/html/certifrump.html");
res.sendFile(pathCertificateRUMP);
}

function getCertificateINTI(req, res){
let pathCertificateINTI = path.join(__dirname,"../../public/html/certiinti.html");
res.sendFile(pathCertificateINTI);
}

module.exports ={
    getCertificates : getCertificates,
    getCertificateRUMP : getCertificateRUMP,
    getCertificateINTI : getCertificateINTI,
}
