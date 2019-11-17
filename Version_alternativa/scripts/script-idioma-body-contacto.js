const BODY_DIRECCION = document.getElementById("direccion");
const BODY_PARTIDO = document.getElementById("partido");
const BODY_PROVINCIA = document.getElementById("provincia");
const BODY_ATENCION = document.getElementById("atencion");
const BODY_NOMBRE = document.getElementById("nombre");
const BODY_MENSAJE = document.getElementById("mensaje");
const BODY_ENVIAR = document.getElementById("enviar");


function cambiarIdiomaBodyContacto(idioma) {
    switch (idioma) {
        case "eng":
            BODY_DIRECCION.innerText = "Address: Zapiola 1144";
            BODY_PARTIDO.innerText = "La Matanza District - San Justo";
            BODY_PROVINCIA.innerText = "Zip Code 1754- Buenos Aires Province.";
            BODY_ATENCION.innerText = "Call Center";
            BODY_NOMBRE.innerText = "Name";
            BODY_MENSAJE.innerText = "Message";
            BODY_ENVIAR.innerText = "Send";
            break;

        case "esp":
            BODY_DIRECCION.innerText = "Dirección: Zapiola 1144";
            BODY_PARTIDO.innerText = "San Justo - Partido de la Matanza";
            BODY_PROVINCIA.innerText = "CP 1754- Provincia de Buenos Aires";
            BODY_ATENCION.innerText = "Atención al Cliente";
            BODY_NOMBRE.innerText = "Nombre";
            BODY_MENSAJE.innerText = "Mensaje";
            BODY_ENVIAR.innerText = "Enviar";

    }
}