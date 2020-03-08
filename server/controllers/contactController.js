const path = require("path");
const nodemailer = require("nodemailer");

function getContact(req, res) {
    let pathContact = path.join(__dirname, "../../public/contacto.html");
    res.sendFile(pathContact);
}

function sendMail(req, res) {
    // create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: "monicaterceros022@gmail.com", // Email emisor
            pass: "patitorrr" // Pass email emisor
        }
    });

    var textBody = `FROM: ${req.body.Nombre} EMAIL: ${req.body.Email} MESSAGE: ${req.body.Mensaje}`;
    var htmlBody = `<h2>Testing</h2><p>from: ${req.body.Nombre} <a href="mailto:${req.body.Email}">${req.body.Email}</a></p><p>${req.body.Mensaje}</p>`;
    var mail = {
        from: "monicaterceros022@gmail.com", // email emisor
        to: "alant.escudero@outlook.com.ar", // lista de emails receptores, pueden ser varios(separar con comas)
        subject: "Testing Mail :v", // Asunto email
        text: textBody,
        html: htmlBody
    };

    // transporter de obj
    transporter.sendMail(mail, function(err, info) {
        if (err) {
            console.log(err);
            res.json({ message: "mensaje no enviado" });
        } else {
            res.json({ message: `el mensaje se envio: ${info.messageId}` });
        }
    });
}

module.exports = {
    getContact: getContact,
    sendMail: sendMail
};
