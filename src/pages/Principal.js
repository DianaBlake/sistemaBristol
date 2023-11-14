import React from "react";
import inicioP from "../images/inicioP.jpg";
import ejemploS from "../images/ejemplo.jpeg";
import bolsa from "../images/bolsa.jpg";
import principal from "../estilos/principal.module.css";
import Encabezado from "../components/Encabezado";
import Slider from "../components/Slider";
import Footer from "../components/Footer";
import bragas from "../images/bragas.jpg";
import bralette from "../images/brasier.jpg";
import brasieres from "../images/brasieres.jpg";
import coordinado from "../images/coordinados.jpg";
function Principal() {
  return (
    <div>
      <Encabezado> </Encabezado>
      {/** Hasta acá */}

      <div className={principal.contenedor}>
        <img className={principal.img} src={inicioP} />
      </div>

      <div>
        <Slider></Slider>
      </div>

      <div className={principal.imgLema}>
        <img className={principal.bralette} src={ejemploS} />
        <p>
          Bristol expresa amar cada curva donde nace el arte y mueren los
          estereotipos
        </p>
      </div>

      {/** Morral bristol */}

      <div className={principal.divMorral}>
        <div className={principal.etiquetaP}>
          <p className={principal.tituloMorral}>
            Compras mayores a $300 pesos <br />
            obtienen un morral ¡GRATIS!{" "}
          </p>
          <br />
          <p className={principal.terminos}>Consulta términos y condiciones</p>
          <br />
        </div>

        <img className={principal.bolsaBristolimg} src={bolsa} />
      </div>

      {/** DESCUBRE MÁS*/}
      {/** Primera imagen*/}

      <div className={principal.contenedorDescubremas}>
        
        <div className={principal.descubremas}>
          <div className={principal.menuimagenes}>
          <button className={principal.btnropa}> Panties </button>
          </div>

        </div>

        {/** Segunda imagen*/}

        <div className={principal.descubremas}>
          <div className={principal.menuimagenes}>
            <img className={principal.descubreimg1} src={brasieres} />
          </div>

          <div className={principal.overlay}>
            <button className={principal.btnropa}> Brasieres </button>
          </div>
        </div>

        {/** Tecer imagen*/}

        <div className={principal.descubremas}>
          <div className={principal.menuimagenes}>
            <img className={principal.descubreimg1} src={bralette} />
          </div>

          <div className={principal.overlay}>
            <button className={principal.btnropa}> Bralettes </button>
          </div>
        </div>

        {/** Cuarta imagen*/}

        <div className={principal.descubremas}>
          <div className={principal.menuimagenes}>
            <img className={principal.descubreimg1} src={coordinado} />
          </div>

          <div className={principal.overlay}>
            <button className={principal.btnropa}> Coordinados </button>
          </div>
        </div>
      </div>

      <div className={principal.Footer}>
        <Footer></Footer>
      </div>
    </div>
  );
}
export default Principal;
