const BODY_FABRICACION = document.getElementById("fabricacion");
const BODY_CALIBRACION = document.getElementById("calibracion");
const BODY_MEDIDAS = document.getElementById("medidas");
const BODY_ASESORAMIENTO = document.getElementById("asesoramiento");



function cambiarIdiomaBody(idioma) {
    switch (idioma) {
        case "eng":
            BODY_FABRICACION.innerText = "Manufacturing";
            BODY_CALIBRACION.innerText = "Calibration and repair";
            BODY_MEDIDAS.innerText = "of capacity measures";
            BODY_ASESORAMIENTO.innerText = "Advice on ISO quality standards";
            break;

        case "esp":
            BODY_FABRICACION.innerText = "Fabricación";
            BODY_CALIBRACION.innerText = "Calibración y Reparación";
            BODY_MEDIDAS.innerText = "de Medidas de Capacidad";
            BODY_ASESORAMIENTO.innerText = "Asesoramiento de normas de calidad ISO";
    }
}