import React from 'react'
import estilos from '../estilos/footer.module.css'
import { BsPaypal, BsFacebook, BsInstagram, BsFillTelephoneFill } from 'react-icons/bs';
import { SiMercadopago } from 'react-icons/si';
import { FaCcMastercard } from 'react-icons/fa';



function Footer() {
    return (
        <div className={estilos.footer}>
            <div className={estilos.seccionVertical}>
                <h2>Colecciones</h2>
                <h3>Panties</h3>
                <h3>Brasieres</h3>
                <h3>Bralettes</h3>
                <h3>Coordinados</h3>
            </div>
            <div className={estilos.seccionVertical}>
                <a href='/atención al cliente'>Atención al cliente</a>
                <h3>Guía de tallas</h3>
                <h3>Términos y condiciones</h3>
                <h3>Tarjetas de regalo</h3>
            </div>
            <div className={estilos.seccionVertical}>
                <h2>Formas de pago</h2>
                <div className={estilos.seccionHorizontal}>
                    <BsPaypal size={30}/>
                    <SiMercadopago size={30}/>
                    <FaCcMastercard size={30}/>
                </div>
                <div className={estilos.seccionVertical}>
                    <h2>Conoce más</h2>
                    <h3>Acerca de Bristol</h3>
                </div>
            </div>
            <div className={estilos.seccionVertical}>
                <h2>Contáctanos</h2>
                <div className={estilos.seccionHorizontal}>
                    <BsFacebook size={30}/>
                    <BsInstagram size={30}/>
                    <BsFillTelephoneFill size={30}/>
                </div>
            </div>
        </div>
    )
}

export default Footer