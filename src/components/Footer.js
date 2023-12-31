import React from 'react'
import estilos from '../estilos/footer.module.css'
import { BsPaypal, BsFacebook, BsInstagram, BsFillTelephoneFill } from 'react-icons/bs';
import { SiMercadopago } from 'react-icons/si';
import { FaCcMastercard } from 'react-icons/fa';

function Footer() {
    return (
        <div className={estilos.footer}>
            <div className={estilos.seccionVertical}>
                <h2>COLECCIONES</h2>
                <p>Panties</p>
                <p>Brasieres</p>
                <p>Bralettes</p>
                <p>Coordinados</p>
            </div>
            <div className={estilos.seccionVertical}>
                <h2>AYUDA</h2>
                <p>Atención al cliente</p>
                <p>Guía de tallas</p>
                <p>Términos y condiciones</p>
                <p>Tarjetas de regalo</p>
            </div>
            <div className={estilos.seccionVertical}>
                <h2>FORMAS DE PAGO</h2>
                <div className={estilos.seccionHorizontal}>
                    <BsPaypal size={30}/>
                    <SiMercadopago size={30}/>
                    <FaCcMastercard size={30}/>
                </div>
                <div className={estilos.seccionVertical}>
                    <h2>CONOCE MÁS</h2>
                    <p>Acerca de Bristol</p>
                </div>
            </div>
            <div className={estilos.seccionVertical}>
                <h2>CONTÁCTANOS</h2>
                <div className={estilos.seccionHorizontal}>
                    <a href='https://www.facebook.com/profile.php?id=100064068821743'> <BsFacebook size={30} color='black'/> </a>
                    <a href='https://www.instagram.com/bristol_mx/'> <BsInstagram size={30} color='black'/> </a>
                    <a href="https://wa.me/7341573029"> <BsFillTelephoneFill size={30} color='black'/>  </a>
                </div>
            </div>
        </div>
    )
}

export default Footer