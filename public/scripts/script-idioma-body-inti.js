const BODY_REPARADOR = document.getElementById("reparador");
const BODY_METEOLOGIA = document.getElementById("meteologia");
const BODY_PARRAFO = document.getElementById("parrafo");

if (localStorage.getItem("idioma") !== null || localStorage.getItem("idioma") !== undefined) {
    MENU_SELECT_IDIOMA.value = localStorage.getItem("idioma");
    cambiarIdiomaBodyInti(MENU_SELECT_IDIOMA.value);
}
MENU_SELECT_IDIOMA.addEventListener("change", (e) => {
    if (MENU_SELECT_IDIOMA.value == "eng") {
        localStorage.setItem("idioma", "eng");
        cambiarIdiomaBodyInti("eng");
    } else if (MENU_SELECT_IDIOMA.value == "esp") {
        localStorage.setItem("idioma", "esp");
        cambiarIdiomaBodyInti("esp")
    }
})

function cambiarIdiomaBodyInti(idioma) {
    switch (idioma) {
        case "eng":
            BODY_REPARADOR.innerText = "Audited Repairman";
            BODY_METEOLOGIA.innerText = "by INTI Legal Metrology";
            BODY_PARRAFO.innerText = "Viano, Capacity Measures is enabled by the Legal Metrology of the Institute.National Industrial Technology as a repairer of suppliers and capacity measures that have complied with the audit of the system and quality management processes.Technicians established by the I.N.T.I. ";
            break;

        case "esp":
            BODY_REPARADOR.innerText = "Reparador Auditado";
            BODY_METEOLOGIA.innerText = "por Metrología legal INTI";
            BODY_PARRAFO.innerText = "Viano, Medidas de Capacidad se encuentra habilitado por Metrología Legal del Instituto Nacional de Tecnología Industrial como reparador de surtidores y medidas de capacidad habiendo cumplido con la auditoría del sistema de gestión de calidad y procesos técnicos que establece el I.N.T.I. ";
    }
}


var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img1 = document.getElementById("certificado1");
var img2 = document.getElementById("certificado2");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img1.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

img2.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}