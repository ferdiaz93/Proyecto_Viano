const express = require('express');
const app = express();
const path = require("path");
const fs = require("fs");
const HomeController = require("./controllers/homeController");
const OurHistoryController = require("./controllers/ourhistoryController");
const ProductsAndServicesController = require("./controllers/productsandservicesController");
const CertificatesController =require("./controllers/certificatesController");
const ContactoController = require("./controllers/contactController");
// const bodyParser = require("body-parser");
const AdminController = require("./controllers/adminController");

// app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.json());
app.use(express.urlencoded( { extended: false } ))



app.get("/", HomeController.getHome);
app.get("/nuestrahistoria", OurHistoryController.getOurHistory);
app.get("/productos", ProductsAndServicesController.getProductsAndServices);
app.get("/certificaciones", CertificatesController.getCertificates);
app.get("/certifrump", CertificatesController.getCertificateRUMP);
app.get("/certifinti", CertificatesController.getCertificateINTI);
app.get("/contacto", ContactoController.getContact);



app.get("/adminlogin", AdminController.getAdmin);
app.get("/admintest", AdminController.getAdminTest);

app.post("/sendmail", ContactoController.sendMail);
     
    


app.listen(5500, function(){
    console.log("Puerto 5500 habilitado");
});
