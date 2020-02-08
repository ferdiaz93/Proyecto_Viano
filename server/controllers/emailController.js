const path = require("path");
const nodemailer = require("nodemailer");


function sendMailer(req, res){
// body parser middleware
app.use(express.json());
app.use(express.urlencoded( { extended: false } )); // this is to handle URL encoded data
// end parser middleware


// custom middleware to log data access
const log = function (request, response, next) {
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

	var textBody = `FROM: ${request.body.name} EMAIL: ${request.body.email} MESSAGE: ${request.body.message}`;
	var htmlBody = `<h2>Testing</h2><p>from: ${request.body.name} <a href="mailto:${request.body.email}">${request.body.email}</a></p><p>${request.body.message}</p>`;
	var mail = {
		from: "monicaterceros022@gmail.com", // email emisor
		to: "fernandodiaz1209@gmail.com", // lista de emails receptores, pueden ser varios(separar con comas)
		subject: "Testing Mail :v", // Asunto email
		text: textBody,
		html: htmlBody
	};

	// transporter de obj
	transporter.sendMail(mail, function (err, info) {
		if(err) {
			console.log(err);
			response.json({ message: "mensaje no enviado" });
		}
		else {
			response.json({ message: `el mensaje se envio: ${info.messageId}` });
		}
	});
});
}

module.exports ={
    sendMailer : sendMailer
}