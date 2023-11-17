// CrearCuenta.js
import React from 'react';
import estilo from "../estilos/cuenta.module.css";
import logo from "../images/Bristol-01.svg";

const Cuenta = () => {
  return (
    <div className={estilo.CrearCuenta}>
      <div className={estilo.Header}>
      <img className={estilo.imglogo} src={logo} width={150} alt="Logo Bristol"/>
      <h2>Crear Cuenta</h2>
      </div> 
      <label>Email:</label>
      <input type="email" />
      <label>Contraseña:</label>
      <input type="password" />
      <div className={estilo.Boton}>
      <button className={estilo.boton}>Crear Cuenta</button>
      </div>
      <div className={estilo.Google}>
      <button className={estilo.google}>Continuar con Google</button>
      </div>
    </div>
  );
};

export default Cuenta;

