const form = document.getElementById("form");

form.addEventListener("submit", function(evn) {
    evn.preventDefault();
    let name = document.getElementById("inputName").value;
    let pass = document.getElementById("inputPassword").value;
    connect(name, pass);
})

function connect(qname,qpass){
fetch(`http://localhost:5500/admintest?user=${qname}&password=${qpass}`);
}