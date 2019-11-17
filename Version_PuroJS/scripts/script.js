const contenedorHeader = document.getElementById("contenedorHeader");
const contenedorFooter = document.getElementById("contenedorFooter");
armarHeaderFooter();

const btnHome = document.getElementById("botonHome");
const btnHistoria = document.getElementById("botonHistoria");
const btnProducto = document.getElementById("botonProducto");
const btnRUMP = document.getElementById("botonRUMP");
const btnINTI = document.getElementById("botonINTI");
const btnContacto = document.getElementById("botonContacto");

const mainContenedorGeneral = document.getElementById("mainContenedorGeneral");

btnHome.addEventListener("click", cambiarHome);
btnHistoria.addEventListener("click", cambiarAHistoria);
btnProducto.addEventListener("click", cambiarProducto);
btnRUMP.addEventListener("click", cambiarRUMP);
btnINTI.addEventListener("click", cambiarINTI);
btnContacto.addEventListener("click", cambiarContacto);

function armarHeaderFooter() {
  armarHeader();
  armarFooter();
}

function armarHeader() {
  contenedorHeader.innerHTML = `
    <nav class="menuNav">
    <div class="logos">
      <img src="../../img/homelogoviano.png" alt="VIANO, MEDIDAS DE CAPACIDAD">
    </div>

    <ul class="botonesNav">
      <li><a id="botonHome">Home</a></li>
      <li><a id="botonHistoria">Nuestra Historia</a></li>
      <li><a id="botonProducto">Productos y Servicios</a></li>
      <li><a id="botonCertificaciones">Certificaciones</a>
        <ul class="subMenu">
          <li><a id="botonRUMP" >Inscripción RUMP Ministerio de Producción</a></li>
          <li><a id="botonINTI" >Reparador Auditado por Meteología Legal INTI</a></li>
        </ul>
      </li>
      <li><a id="botonContacto">Contacto</a></li>
    </ul>

    <div class="logo2">
      <img src="../../img/isologoblanco.png" alt="Logo ISO">
    </div>
  </nav>
    `;
}

function armarFooter() {
  contenedorFooter.innerHTML = `
    <div class="textoFooter">
    <h3>
      Contacto
    </h3>
    <p>
      Tel: + 54 9 11 3566 4142
    </p>
  </div>

  <div class="textoFooter">
    <p>
      Zapiola 1144, San Justo
    </p>
    <p>
      Partido de la Matanza
    </p>
  </div>

  <div class="textoFooter">
    <p>
      CP 1754- Provincia de Buenos Aires
    </p>
  </div>
    `;
}

function cambiarHome() {
  mainContenedorGeneral.innerHTML = "";
  mainContenedorGeneral.style.backgroundColor = "";
  mainContenedorGeneral.innerHTML = `
    <div class="textoSectionHome">
    <h1>
      Fabricación,
    </h1>
    <h1>
      Calibración y Reparación
    </h1>
    <h1>
      de Medidas de Capacidad
    </h1>
    <p>
      Asesoramiento de normas de calidad ISO
    </p>

    <div class="logoSection">
      <img src="../../img/homelogoviano.png" alt="VIANO, MEDIDAS DE CAPACIDAD">
    </div>

    `;
}

function cambiarAHistoria() {
  // document.body.style.backgroundImage = ""
  // console.log(document.body.style.backgroundImage = "")
  mainContenedorGeneral.innerHTML = "";
  mainContenedorGeneral.style.backgroundColor = "white";
  mainContenedorGeneral.innerHTML = `
    <div class="textoSectionHistoria">
    <h2>
        Nuestra
    </h2>
    <p>
        Historia
    </p>
</div>
<div class="textoSection2Historia">
    <p>
        Somos una organización joven encabezada por dos socios,
        combinando conocimientos en sistemas de calidad y reparación de
        instrumentos de medición.
    </p>
    <p>
        Contamos con amplia trayectoria en empresas líderes automotrices
        y fábricas de instrumentos de medición. Además de amplíos
        conocmientos en robótica y en máquinas de medir.
    </p>
    <p>
        El desarrollo de las medidas de capacidad es una combinación de
        Diseño, Sustentabilidad y desarrollo profesional de Nosotros.
    </p>
</div>
    `;
}

function cambiarProducto() {
  mainContenedorGeneral.innerHTML = " ";
  mainContenedorGeneral.style.backgroundColor = "white";

  mainContenedorGeneral.innerHTML = `
    <div class="textoSectionProductos">
    <h2>
        Producto
    </h2>
    <p>
        Marca: VIANO
    </p>
    <p>
        Modelo: DAMAR
    </p>
</div>

<div class="productoViano">
    <!--el div abarca por default el ancho de la página-->
    <img src="../../img/producto.jpg" alt="Producto Viano">
</div>

<div class="carruselViano">
    <!--el div abarca por default el ancho de la página-->
    <img src="../../img/1 Carrusel.jpg" alt="Producto Viano Frente">
    <img src="../../img/2 Carrusel.jpg" alt="Producto lado izquierdo">
    <img src="../../img/3 Carrusel.jpg" alt="Producto lado derecho">
</div>

    `;
}

function cambiarRUMP() {
  mainContenedorGeneral.innerHTML = "";
  mainContenedorGeneral.style.backgroundColor = "white";

  mainContenedorGeneral.innerHTML = `
    <div class="textoSectionRUMP">
    <h2>
        Inscripción RUMP 
    </h2>
    <p>
        Ministerio de Producción
    </p>
</div>
<div class="textoSection2RUMP">
    <p>
        Viano, Medida de capacidad se encuentra
        inscripto como reparador de surtidores y como
        fabricante y reparador de medidas de capacidad
        bajo el número de R.U.M.P. RL-2018 de acuerdo a
        los requisitos establecidos por el Ministerio
        de Producción de la República Argentina. 
    </p>

</div>
    `;
}

function cambiarINTI() {
  mainContenedorGeneral.innerHTML = "";
  mainContenedorGeneral.style.backgroundColor = "white";

  mainContenedorGeneral.innerHTML = `
    <div class="textoSectionINTI">
    <h2>
        Reparador Auditado
    </h2>
    <p>
        por Meteología legal INTI 
    </p>
</div>
<div class="textoSection2INTI">
    <p>
        Viano, Medidas de Capacidad se encuentra
        habilitado por Meteología Legal del Instituto
        Nacional de Tecnología Industrial como
        reparador de surtidores y medidas de
        capacidad habiendo cumplido con la auditoría
        del sistema de gestión de calidad y procesos
        técnicos que establece el I.N.T.I.
    </p>
</div>
    `;
}

function cambiarContacto() {
  mainContenedorGeneral.innerHTML = "";
  mainContenedorGeneral.style.backgroundColor = "white";

  mainContenedorGeneral.innerHTML = `
    <div class="textoSectionContacto">
    <h2>
        VIANO
    </h2>
</div>
<div class="textoSection2Contacto">
    <p>
        Dirección: Zapiola 1144
    </p>
    <p>
        San Justo - Partido de la Matanza
    </p>
    <p>
        CP 1754- Provincia de Buenos Aires
    </p>
    <div class="textoAtencionAlCliente">
        <h4>
            Atención al Cliente
        </h4>
        <p>
            Tel: + 54 9 11 3566 4142
        </p>
    </div>
</div>

<form action="/my-handling-form-page" method="post">
    <div>
        <label for="name">Nombre*</label>
        <!--El elemento label representa una etiqueta que puede ser asociada a un control de formulario, y que se supone provee una descripción corta para éste. Los navegadores pueden enlazar ambos elementos permitiendo que los usuarios establezcan el enfoque sobre el control al hacer clic en su etiqueta.-->
        <input type="text" id="name" />
        <!--El elemento HTML <input> se usa para crear controles interactivos para formularios basados en la web, que reciban datos del usuario. La forma en que <input> funciona varía considerablemente dependiendo del valor de su atributo type.-->
    </div>
    <div>
        <label for="mail">Email*</label>
        <input type="email" id="mail" />
    </div>
    <div>
        <label for="msg">Message*</label>
        <textarea id="msg"></textarea>
    </div>

    <div class="button">
        <!--Botón sin un comportamiento específico.-->
        <button type="submit">Enviar</button>
    </div>
</form>
    `;
}
