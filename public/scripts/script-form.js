const formContact = document.getElementById("formContact");

formContact.addEventListener("submit", function (evn) {
    evn.preventDefault();
    submitEmailForm();
})

function submitEmailForm() {
    let name = document.getElementById("inputName").value;
    let email = document.getElementById("inputEmail").value;
    let message = document.getElementById("inputMessage").value;

    fetch('http://localhost:5500/sendmail', {
        method: "POST",
        headers: {
            "content-type": "application/JSON"
        },
        body: JSON.stringify({
            Nombre: name,
            Email: email,
            Mensaje: message,
        })
    });
}