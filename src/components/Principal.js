import React from "react";
import logo from "../images/logo.jpg";
import inicioP from "../images/inicioP.jpg";
import { CiUser, CiSearch } from "react-icons/ci";
import principal from "../estilos/principal.module.css";
import { BsCart3 } from "react-icons/bs";

function Principal() {
  return (
    <div className={principal.principal}>
      <div className={principal.logos}>
        <img className={principal.imglogo} src={logo} width={150} />
        <div className={principal.iconos}>
          <CiUser color="#050404" />
          <BsCart3 color="#050404" />
          <CiSearch color="#050404" />
        </div>
      </div>

      <div className={principal.menu}>
        <ul className={principal.lista}>
          <li className={principal.lista2}>
            <a href="/">INICIO</a>
            <a href="/">AYUDA</a>
            <a href="/">CONJUNTOS</a>
            <a href="/">BRALETTES</a>
            <a href="/">NOVEDADES</a>
          </li>
        </ul>
        <div class={principal.linea}></div>
      </div>

      <div className={principal.contenedor}>
         <img className={principal.img} src={inicioP} width={650} />
      </div>
    </div>
  );
}
export default Principal;
