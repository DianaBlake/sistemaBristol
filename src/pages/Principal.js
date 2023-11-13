import React from "react";
import inicioP from "../images/inicioP.jpg";
import ejemploS from "../images/ejemplo.jpeg";
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
        <img className={principal.bralette} src={ejemploS} alt="Imagen de referencia" />
        <p>Bristol expresa amar cada curva donde
        nace el arte y mueren los estereotipos.
        </p>

      </div>


      <div className={principal.Footer}>
        <Footer></Footer>
      </div>
    </div>
  );
}
export default Principal;
