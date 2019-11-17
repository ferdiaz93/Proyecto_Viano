const BODY_PRODUCTO = document.getElementById("producto");
const BODY_MARCA = document.getElementById("marca");
const BODY_DAMAR = document.getElementById("modelo");


function cambiarIdiomaBodyProductos(idioma) {
    switch (idioma) {
        case "eng":
            BODY_PRODUCTO.innerText = "Product"
            BODY_MARCA.innerText = "Brand: VIANO"
            BODY_DAMAR.innerText = "Model: DAMAR"

            break;
        case "esp":
            BODY_PRODUCTO.innerText = "Producto"
            BODY_MARCA.innerText = "Marca: VIANO"
            BODY_DAMAR.innerText = "Modelo: DAMAR"
    }
}