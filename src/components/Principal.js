import React from "react";
import logo from "../images/logo.jpg";
import inicioP from "../images/inicioP.jpg";
import { CiUser, CiSearch } from "react-icons/ci";
import principal from "../estilos/principal.module.css";
import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";

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
              <Link to="/">INICIO</Link>
              <Link to="/ayuda">AYUDA</Link>
              <Link to="/conjuntos">CONJUNTOS</Link>
              <Link to="/bralettes">BRALETTES</Link>
              <Link to="/novedades">NOVEDADES</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div class={principal.linea}></div>
      <div className={principal.contenedor}>
        <img className={principal.img} src={inicioP} width={650} alt="Inicio" />
      </div>
    </div>
  );
}
export default Principal;
