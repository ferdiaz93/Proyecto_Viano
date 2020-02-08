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
            BODY_METEOLOGIA.innerText = "by INTI Legal Meteology";
            BODY_PARRAFO.innerText = language.eng.certifInti.paragraph1;
            break;

        case "esp":
            BODY_REPARADOR.innerText = "Reparador Auditado";
            BODY_METEOLOGIA.innerText = "por Meteología legal INTI";
            BODY_PARRAFO.innerText = language.esp.certifInti.paragraph1;
    }
}