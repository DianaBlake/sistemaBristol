import React from "react";
import inicioP from "../images/inicioP.jpg";
import ejemploS from "../images/ejemplo.jpeg";
import bolsa from "../images/bolsa.jpg";
import principal from "../estilos/principal.module.css";
import Encabezado from "../components/Encabezado";
import Slider from "../components/Slider";
import Footer from "../components/Footer";

function Principal() {

  
  return (
    <div>
      <Encabezado> </Encabezado>
      {/** Hasta acá */}
      <div className={principal.contenedor}>
        <img className={principal.img} src={inicioP} alt="Imagen de referencia"/>
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

      <div className={principal.divDescubre}>
    <h1 className={principal.h1descubremas}>DESCUBRE MÁS</h1>
      </div>

      <div className={principal.contenedorDescubremas}>
        
        <div className={principal.descubremas1}>
          <div className={principal.menuimagenes}>
          <button className={principal.btnropa}> PANTIES </button>
          </div>

        </div>

        {/** Segunda imagen*/}
        <div className={principal.descubremas2}>
          <div className={principal.menuimagenes}>
          <button className={principal.btnropa}> BRASIERES </button>
          </div>

        </div>


        {/** Tecer imagen*/}

        <div className={principal.descubremas3}>
          <div className={principal.menuimagenes}>
          <button className={principal.btnropa}> BRALETTES </button>
          </div>

        </div>

        {/** Cuarta imagen*/}

        <div className={principal.descubremas4}>
          <div className={principal.menuimagenes}>
          <button className={principal.btnropa}> COORDINADOS </button>
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
