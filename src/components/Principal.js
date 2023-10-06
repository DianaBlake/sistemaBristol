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
        <img className={principal.imglogo} src={logo} alt="Logo" />
        <CiUser color="#050404" />
        <BsCart3 color="#050404" />
        <CiSearch color="#050404" />
      </div>

      <div className={principal.estilosnav}>
        <nav className={principal.navegador}>
          <ul className={principal.footer}>
            <li className={principal.lista2}>
              <a href="/">INICIO</a>
              <a href="/">AYUDA</a>
              <a href="/">CONJUNTOS</a>
              <a href="/">BRALETTES</a>
              <a href="/">NOVEDADES</a>
            </li>
          </ul>
        </nav>
      </div>
      <div class={principal.linea}></div>
      <div className={principal.contenedor}>
        <img className={principal.img} src={inicioP} width={650} alt="Inicio"/>
      </div>
    </div>
  );
}
export default Principal;
