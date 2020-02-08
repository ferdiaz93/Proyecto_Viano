const BODY_NUESTRA = document.getElementById("nuestra");
const BODY_HISTORIA = document.getElementById("historia");
const BODY_PARRAFO_1 = document.getElementById("parrafo1");
const BODY_PARRAFO_2 = document.getElementById("parrafo2");
const BODY_PARRAFO_3 = document.getElementById("parrafo3");

if (localStorage.getItem("idioma") !== null || localStorage.getItem("idioma") !== undefined) {
    MENU_SELECT_IDIOMA.value = localStorage.getItem("idioma");
    cambiarIdiomaBody(MENU_SELECT_IDIOMA.value);
}
MENU_SELECT_IDIOMA.addEventListener("change", (e) => {
    if (MENU_SELECT_IDIOMA.value == "eng") {
        localStorage.setItem("idioma", "eng");
        cambiarIdiomaBody("eng");
    } else if (MENU_SELECT_IDIOMA.value == "esp") {
        localStorage.setItem("idioma", "esp");
        cambiarIdiomaBody("esp")
    }
})

function cambiarIdiomaBody(idioma) {
    switch (idioma) {
        case "eng":
            BODY_NUESTRA.innerText = "About";
            BODY_HISTORIA.innerText = "Us";
            BODY_PARRAFO_1.innerText = language.eng.aboutAs.paragraph1;
            BODY_PARRAFO_2.innerText = language.eng.aboutAs.paragraph2;
            BODY_PARRAFO_3.innerText = language.eng.aboutAs.paragraph3;
            break;
        case "esp":
            BODY_NUESTRA.innerText = "Nuestra";
            BODY_HISTORIA.innerText = "Historia";
            BODY_PARRAFO_1.innerText = language.esp.aboutAs.paragraph1
            BODY_PARRAFO_2.innerText = language.esp.aboutAs.paragraph2
            BODY_PARRAFO_3.innerText = language.esp.aboutAs.paragraph3
    }
}