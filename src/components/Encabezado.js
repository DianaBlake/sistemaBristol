import React, { useState } from "react";
import { BsCart3 } from "react-icons/bs";
import { CiUser, CiSearch } from "react-icons/ci";
import logo from "../images/logo.jpg";
import principal from "../estilos/principal.module.css";
import Carrito from "./Carrito";

function Encabezado() {

  const [carshop, setCarshop] = useState(false)


  return (
    <div className={principal.principal}>
      <div className={principal.logos}>
        <img className={principal.imglogo} src={logo} width={150} />
        <div className={principal.iconos}>
          <CiUser color="#050404" />
          <BsCart3 color="#050404" onClick={()=>{setCarshop(!carshop)}}/>
          <CiSearch color="#050404" />
        </div>
      </div>
      <Carrito/>
      <div className={principal.menu}>
        <a href="/">INICIO</a>
        <a href="/ayuda">AYUDA</a>
        <a href="/">CONJUNTOS</a>
        <a href="/">BRALETTES</a>
        <a href="/">NOVEDADES</a>
      </div>

      <hr className={principal.linea} />
    </div>
  );
}

export default Encabezado;
