const express = require('express');
const app = express();
const path = require("path");
const fs = require("fs");
const HomeController = require("./controllers/homeController");
const OurHistoryController = require("./controllers/ourhistoryController");
const ProductsAndServicesController = require("./controllers/productsandservicesController");
const CertificatesController =require("./controllers/certificatesController");
// const CertificateRUMP = require("./controllers/certificatesController");

const AdminController = require("./controllers/adminController");

app.use(express.static(path.join(__dirname, "../public")));

app.get("/", HomeController.getHome);
app.get("/nuestrahistoria", OurHistoryController.getOurHistory);
app.get("/productos", ProductsAndServicesController.getProductsAndServices);
app.get("/certificaciones", CertificatesController.getCertificates);
app.get("/certifeump", CertificatesController.getCertificateRUMP);
app.get("/certiinti", CertificatesController.getCertificateINTI);


app.get("/adminlogin", AdminController.getAdmin);
app.get("/admintest", AdminController.getAdminTest);


app.listen(5500, function(){
    console.log("Puerto 5500 habilitado");
});
