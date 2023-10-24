import React from 'react'
import estilos from '../estilos/atencion.module.css'

function AtencionAlCliente() {
    return (
        <div className={estilos.body}>
            <form action="" className={estilos.centerForm}>
                <div className={estilos.form}>
                    <h1 className={estilos.h1}>Atención al cliente</h1>
                    <div className={estilos.grupo}>
                        <input className={estilos.input}type="text" name="" id="" required/><span className={estilos.barra}></span>
                            <label className={estilos.label}>Nombre</label>
                    </div>
                    <div className={estilos.grupo}>
                        <input className={estilos.input} type="email" name="" id="" required/><span className={estilos.barra}></span>
                            <label className={estilos.label}>Email</label>
                    </div>
                    <div className={estilos.grupo}>
                        <input className={estilos.input} type="tel" name="telefono" id="telefono" required/><span className={estilos.barra}></span>
                            <label className={estilos.label}>Número de Teléfono</label>
                    </div>
                    <div className={estilos.grupo}>
                        <textarea className={estilos.textarea}name="" id="" rows="3" required></textarea><span className={estilos.barra}></span>
                        <label className={estilos.label}>Mensaje</label>
                    </div>
                    <button className={estilos.button}type="submit">Enviar</button>
                </div>
            </form>

            <footer className={estilos.redesSociales}>
                <h1 className={estilos.h1}>¡GRACIAS POR SU PREFERENCIA!</h1>
                <h2 className={estilos.h2}>Síguenos en nuestras redes sociales</h2>
                <div className={estilos.iconosRedes}>
                    <a href="https://www.facebook.com" target="_blank">
                        <img src="facebook.png" alt="Facebook" />
                    </a>
                    <a href="https://www.instagram.com" target="_blank">
                        <img src="logotipo-de-instagram.png" alt="Instagram" />
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=123456789" target="_blank">
                        <img src="whatsapp.png" alt="WhatsApp" />
                    </a>
                </div>
            </footer>
        </div>
    )
}

export default AtencionAlCliente