import React, { useState } from 'react'
import estilo from '../estilos/ayuda.module.css'
import Encabezado from '../components/Encabezado'
import Footer from '../components/Footer'

const SeccionTiendas = () => {
  return (
    <div>
      <h1>Seccion tiendas fisicas</h1>
      {/* Aqui ira el codigo correscpondiente a quien le haya tocado */}
    </div>
  )
}
const SeccionTallas = () => {
  return (
    <div>
      <h1>Seccion tallas y medidas</h1>
      {/* Aqui ira el codigo correscpondiente a quien le haya tocado */}
    </div>
  )
}
const SeccionEnvios = () => {
  return (
    <>
{/* Sección ENVIOS*/}

<div className= {estilo.contenedorAcordeon}>
       
       <h2>ENVÍOS</h2>
       
       <div className={estilo.acordeon}>
           <input type="radio" name="acordeon" id="btn-acordeon1" className= {estilo.btnAcordeon}/>
           
           <label for="btn-acordeon1"> &#9533;
               ¿Cuántos días tarda mi pedido en llegar?
           </label>
           
           <div className={estilo.contenidoAcordeon}>
               <p>Plazo: 3 - 5 días laborales.</p>
                <p>Los días puede varias dependiendo de tu código postal, el día y la hora de la compra. 
                  Puedes apróximar la fecha de entrega una vez finalizando la compra el número de guía.</p>
           </div>
       </div>
       
       <div className={estilo.acordeon}>         
        <input type="radio" name="acordeon" id="btn-acordeon2" className= {estilo.btnAcordeon}/>
           
        <label for="btn-acordeon2"> &#9533;
            ¿Qué paquetería es la que ocupan?
        </label>
           
        <div className={estilo.contenidoAcordeon}>
            <p>DHL nos acompaña en la entrega de tu envío con el mejor servicio y tiempo. 
              Es importante saber que DHL, puede variar con los dias hábiles de entrega, pero siempre puedes confiar 
              con nostros ya que nos encargaremos de hacer llegar tu paquete hasta la puerta de tu hogar.</p>
        </div>
    </div>
       
    <div className={estilo.acordeon}>
        <input type="radio" name="acordeon" id="btn-acordeon3" className= {estilo.btnAcordeon}/>
        
        <label for="btn-acordeon3" >&#9533;
            ¿Cómo puedo rastrear mi pedido?
        </label>
        
        <div className={estilo.contenidoAcordeon}>
            <p>En la página oficial de DHL, puedes encontrar la opción de "rastrear y envío" o bien, 
              puedes escanear el QR que te lleva directo a la página.</p>
        </div>
    </div>
       
    <div className={estilo.acordeon}>
        <input type="radio" name="acordeon" id="btn-acordeon4" className= {estilo.btnAcordeon}/>
        
        <label for="btn-acordeon4"> &#9533;
            ¿Cuentan con cambios o reembolsos?
        </label>
        <div className={estilo.contenidoAcordeon}>
            <p>No contamos con reembolsos o cambios.</p>
            <p>Para evitar inconvenientes se les recomienda realizar la compra con cautela y revisar 
              las medidas antes de seleccionar una talla.</p>
              <img src="./img/qr.png" className = {estilo.imgQr}/> 
        </div>
    </div>
       
   </div>

  {/* Sección Pagos */}
      <div className={estilo.clasePagos}>
        <h2>PAGOS </h2>
        <br/>
          <img src="./img/americanE.png" />
          <img src="./img/paypal.png" />
          <img src="./img/visa.png" />
          <img src="./img/mercadoPago.png" />
          <img src="./img/mastercard.png" />
          <img src="./img/oxxo.png" />
      </div>
    </>

  )
}
const SeccionDevoluciones = () => {
  return (
    <div>
      <h1>Seccion de devoluciones</h1>
      {/* Aqui ira el codigo correscpondiente a quien le haya tocado */}
    </div>
  )
}
const SeccionPersonalizados = () => {
  return (
    <div>
      <h1>Seccion personalizados</h1>
      {/* Aqui ira el codigo correscpondiente a quien le haya tocado */}
    </div>
  )
}

function Ayuda() {
  const [seccion, setSeccion] = useState(0)

  const cambiarSeccion = () => {
    switch (seccion) {
      case 0:
        return <SeccionTiendas />
      case 1:
        return <SeccionTallas />
      case 2:
        return <SeccionEnvios />
      case 3:
        return <SeccionDevoluciones />
      case 4:
        return <SeccionPersonalizados />
      default:
        break
    }
  }

  const EncabezadoAyuda = () => {
    return (
      <div className={estilo.ayuda}>
        <div className={estilo.secAyuda} onClick={() => { setSeccion(0) }}>
          <p>TIENDAS FÍSICAS</p>
        </div>
        <div className={estilo.secAyuda} onClick={() => { setSeccion(1) }}>
          <p>ARTICULOS Y TALLAS</p>
        </div>
        <div className={estilo.secAyuda} onClick={() => { setSeccion(2) }}>
          <p>PAGOS Y ENVÍOS</p>
        </div>
        <div className={estilo.secAyuda} onClick={() => { setSeccion(3) }}>
          <p>DEVOLUCIONES</p>
        </div>
        <div className={estilo.secAyuda} onClick={() => { setSeccion(4) }}>
          <p>PERSONALIZADOS</p>
        </div>
      </div>
    )
  }


  return (
    <>
      <Encabezado />
      <p className={estilo.Titulo}>PREGUNTAS FRECUENTES</p>
      <EncabezadoAyuda />
      <div className={estilo.SeccionArea}>
        {cambiarSeccion()}
      </div>
      {/* <Footer/> */}
    </>
  )
}

export default Ayuda