import React, { useState } from "react";
import contraseña from "../estilos/contraseña.module.css";
import logo from "../images/Bristol-01.svg";


const PasswordRecovery = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Envía la solicitud de recuperación de contraseña al servidor (backend)
    try {
      const response = await fetch("/api/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage(
          "Se ha enviado un correo electrónico con instrucciones para restablecer la contraseña."
        );
        setIsSuccess(true);
      } else {
        const data = await response.json();
        setMessage(
          data.error || "Ha ocurrido un error al procesar tu solicitud."
        );
      }
    } catch (error) {
      setMessage("Ha ocurrido un error al procesar tu solicitud.");
    }
  };

  return (
    <div>
      <div className={contraseña.logos}>
        <img className={contraseña.imglogo} src={logo} />
      </div>

      <hr className={contraseña.linea} />

      <div className={contraseña.cuadro}> 

      <p className={contraseña.contraseña}>¿Olvidaste tu contraseña?</p>
      <p className={contraseña.descripcion}>
      Ingresa un correo para poder enviarte las indicaciones
      y puedas restablecer la contraseña de tu cuenta.
      Recuerda que el correo debe ser el mismo que usaste para iniciar sesión. Esto solo toma un par de minutos.
      </p>

      {isSuccess ? (
        <p>{message}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label className={contraseña.correo}>
            Correo electrónico: 
            <input type="email" value={email} onChange={handleEmailChange} />
          <button className={contraseña.btnEnviar} type="submit">Enviar solicitud</button>
          <a className={contraseña.Volver} href="/InicioSesion">Volver a Bristol</a>
          </label> 

          <p>{message}</p>
        </form>
      )}
    </div>
    </div>

  );
};

export default PasswordRecovery;
