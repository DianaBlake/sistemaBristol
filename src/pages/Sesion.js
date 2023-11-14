import React from "react";
import session from "../estilos/session.module.css";
import logo from "../images/Bristol-01.svg";
import { AiFillGoogleCircle } from "react-icons/ai";
import Footer from "../components/Footer";
import Google from "../components/Google";
function Sesion() {
  return (
    <div>
      <div className={session.logos}>
        <img className={session.imglogo} src={logo} />
      </div>

      <hr className={session.linea} />

      <div className={session.cuadro}>
        <p className={session.titulo}>INICIA SESIÓN</p>
        <input className={session.input1}></input>
        <input for="name" className={session.input2}></input>
        <a href="/contraseña" className={session.contraseña}>
          ¿Olvidaste tu contraseña?
        </a>
        <button className={session.botonSesion}>Iniciar sesión</button>

        <p className={session.pregunta}>
          {" "}
          ¿No tienes cuenta?
          <a href="/" className={session.cuenta}>
            Crear cuenta
          </a>
        </p>

        <div className={session.O}>
          <hr className={session.lineaBefore} />
          <p>O</p>
          <hr className={session.lineaAfter} />
        </div>

        <div className={session.botonGoogle}>
          <Google></Google>
        </div>
        
      </div>
      <div className={session.footer}></div>
      <Footer></Footer>


    </div>
  );
}





export default Sesion;
