import React, { useState } from "react";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { CiUser, CiSearch } from "react-icons/ci";
import logo from "../images/Bristol-01.svg";
import principal from "../estilos/principal.module.css";
import Carrito from "./Carrito";
import InicioSesion from "./InicioSesion";

const Encabezado = () => {

  const [carshop, setCarshop] = useState(false)
  const [inicioSesion, setInicioSesion] = useState(false)

  const handleInicioSesionClick = (e) => {
    e.preventDefault(); // Prevenir la acción predeterminada del enlace
    setInicioSesion(!inicioSesion);
  };

  return (
    <div className={principal.principal}>
      <div className={principal.logos}>
        <img className={principal.imglogo} src={logo} width={150} alt="Logo Bristol"/>
        <div className={principal.iconos}>

        <div className={principal.iconoX}>
            <CiUser onClick={()=>{window.location.href="/InicioSesion"}}/>
          </div>

          <PiShoppingCartSimpleLight className={principal.iconoX} onClick={()=>{
            // setCarshop(!carshop)
            window.location.href = "/orderpage"
            }}/>
          <CiSearch className={principal.iconoX}/>
        </div>
      </div>
      {
        carshop && (<Carrito setCarshop={setCarshop}/>)
      }

      {
        inicioSesion && (<InicioSesion setInicioSesion={setInicioSesion}/>)
      }

      <div className={principal.menu}>
        <a href="/">INICIO</a>
        <a href="/ayuda">AYUDA</a>
        <a href="/conjuntos">CONJUNTOS</a>
        <a href="/bralettes">BRALETTES</a>
        <a href="/panties">PANTIES</a>
      </div>

      <hr className={principal.linea} />
    </div>
  );
}

export default Encabezado;
