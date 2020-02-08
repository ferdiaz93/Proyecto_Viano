const express = require('express');
const app = express();
const nodemailer = require("nodemailer");
const path = require("path");
const fs = require("fs");
const HomeController = require("./controllers/homeController");
const OurHistoryController = require("./controllers/ourhistoryController");
const ProductsAndServicesController = require("./controllers/productsandservicesController");
const CertificatesController = require("./controllers/certificatesController");
const ContactoController = require("./controllers/contactController");

const AdminController = require("./controllers/adminController");



app.use(express.static(path.join(__dirname, "../public")));

app.get("/", HomeController.getHome);
app.get("/nuestrahistoria", OurHistoryController.getOurHistory);
app.get("/productos", ProductsAndServicesController.getProductsAndServices);
app.get("/certificaciones", CertificatesController.getCertificates);
app.get("/certifrump", CertificatesController.getCertificateRUMP);
app.get("/certiinti", CertificatesController.getCertificateINTI);
app.get("/contacto", ContactoController.getContact);


app.get("/adminlogin", AdminController.getAdmin);
app.get("/admintest", AdminController.getAdminTest);

app.post('/edit', AdminController.editText);



// body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // this is to handle URL encoded data
// end parser middleware


// custom middleware to log data access
const log = function(request, response, next) {
    console.log(`${new Date()}: ${request.protocol}://${request.get('host')}${request.originalUrl}`);
    console.log(request.body); // make sure JSON middleware is loaded first
    next();
}
app.use(log);
// end custom middleware


// enable static files pointing to the folder "public"
// this can be used to serve the index.html file
app.use(express.static(path.join(__dirname, "public")));


// HTTP POST
app.post("/ajax/email", function(request, response) {
    // create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: "monicaterceros022@gmail.com", // Email emisor
            pass: "welcomenhk91" // Pass email emisor
        }
    });

    var textBody = `FROM: ${request.body.Nombre} EMAIL: ${request.body.Email} MESSAGE: ${request.body.Mensaje}`;
    var htmlBody = `<h2>Testing</h2><p>from: ${request.body.Nombre} <a href="mailto:${request.body.Email}">${request.body.Email}</a></p><p>${request.body.Mensaje}</p>`;
    var mail = {
        from: "monicaterceros022@gmail.com", // email emisor
        to: "fernandodiaz1209@gmail.com", // lista de emails receptores, pueden ser varios(separar con comas)
        subject: "Testing Mail :v", // Asunto email
        text: textBody,
        html: htmlBody
    };

    // transporter de obj
    transporter.sendMail(mail, function(err, info) {
        if (err) {
            console.log(err);
            response.json({ message: "mensaje no enviado" });
        } else {
            response.json({ message: `el mensaje se envio: ${info.messageId}` });
        }
    });
});



app.listen(5500, function() {
    console.log("Puerto 5500 habilitado");
});