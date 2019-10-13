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
      <li><a id="botonHistoria">About</a></li>
      <li><a id="botonProducto">Products and Services</a></li>
      <li><a id="botonCertificaciones">Certifications</a>
        <ul class="subMenu">
          <li><a id="botonRUMP" >RUMP Registration Minsitry of Production</a></li>
          <li><a id="botonINTI" >Audited Repairman by INTI Legarl Meotology</a></li>
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
      Contact
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
    La Matanza District
    </p>
  </div>

  <div class="textoFooter">
    <p>
    Zip Code 1754- Buenos Aires Province. 
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
      Manufacturing,
    </h1>
    <h1>
      Calibration and repair
    </h1>
    <h1>
      of capacity measures
    </h1>
    <p>
      Advice on ISO quality standards
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
        We are a young organization headed by two partners,
        which combines knowledge in quality systems and 
        the repair of measuring instruments
    </p>
    <p>
        We have extensive experience in the main automotive 
        companies and factories of measuring instruments. 
        In addition to extensive knowledge in robotics 
        and measuring machines.
    </p>
    <p>
        The development of capacity measures is a combination
        of Design, Sustainability and Professional
        Development of Us.
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
        Product
    </h2>
    <p>
        Brand: VIANO
    </p>
    <p>
        Model: DAMAR
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
    RUMP Registration 
    </h2>
    <p>
    Ministry of Production
    </p>
</div>
<div class="textoSection2RUMP">
    <p>
    Viano, Measurement of capacity is registered as supplier 
    repairman and asmanufacturer and repairer of capacity 
    measurements under the number of R.U.M.P. RL-2018 
    according to the requirements established by the Ministry
    of Production of the Argentine Republic.  
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
    Audited Repairman
    </h2>
    <p>
    by INTI Legal Meteology 
    </p>
</div>
<div class="textoSection2INTI">
    <p>
    Viano, Capacity Measures is enabled by the Legal Meteology
    of the Institute. National Industrial Technology as a 
    repairer of suppliers and capacity measures that have 
    complied with the audit of the system and quality 
    management processes. Technicians established by the I.N.T.I.
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
        Address: Zapiola 1144
    </p>
    <p>
        La Matanza District - San Justo
    </p>
    <p>
    Zip Code 1754- Buenos Aires Province.
    </p>
    <div class="textoAtencionAlCliente">
        <h4>
            Call Center
        </h4>
        <p>
            Tel: + 54 9 11 3566 4142
        </p>
    </div>
</div>

<form action="/my-handling-form-page" method="post">
    <div>
        <label for="name">Name*</label>
        
        <input type="text" id="name" />
        
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
        <button type="submit">Send</button>
    </div>
</form>
    `;
}
