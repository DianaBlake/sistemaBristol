import React from "react";
import inicioP from "../images/inicioP.jpg";
import principal from "../estilos/principal.module.css";
import Encabezado from "../components/Encabezado";

function Principal() {
  return (
    <div>
      <Encabezado> </Encabezado>
{/** Hasta acá */}

      <div className={principal.contenedor}>
         <img className={principal.img} src={inicioP} />
      </div>


    </div>
  );
}
export default Principal;
