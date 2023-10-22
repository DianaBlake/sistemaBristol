import React, { useState } from 'react'
import estilo from '../estilos/ayuda.module.css'
import Encabezado from '../components/Encabezado'
import Footer from '../components/Footer'
import imagen from '../images/TiendasFisicas.png'
import {LiaRulerHorizontalSolid} from 'react-icons/lia'
const SeccionTiendas = () => {
  return (
    <>
      <h1>Sección tiendas fisicas</h1>
      <div className={estilo.container}>

        <img src={imagen} alt="Imagen" className={estilo.imagen}></img>


        <div className={estilo.contenido}>

          <h1>BIENVENIDOS</h1>

          <p className={estilo.parrafo}>Por el momento no cuenta con tiendas<br></br>
            fisicas. Las compras únicamente se pueden <br></br>
            realzar de manera virtual. Estamos trabajando<br></br>
            para poder abrir nuestra primer sucursal<br></br>
            y esperamos pronto brindar un servicio<br></br>
            en un establecimiento.<br></br>
            ¡Gracias por tu comprensión y apoyo!
          </p>

        </div>


        {/* Aqui ira el codigo correscpondiente a quien le haya tocado */}
      </div>
    </>
  )
}
const SeccionTallas = () => {
  const [tablaSeleccionada, setTablaSeleccionada] = useState(''); // Estado para rastrear la tabla seleccionada

  const mostrarTabla = (seleccion) => {
    setTablaSeleccionada(seleccion);
  };

  return (
    <div className={estilo.secTallas}>
      <header className={estilo.contenedorHeader}>
        <LiaRulerHorizontalSolid className={estilo.img} />
        <h1>GUÍA DE TALLAS</h1>
      </header>
      <div className={estilo.subtitulos}>
        <div className={estilo.subtitulo}>
          <p id="busto" className={tablaSeleccionada === 'busto' ? estilo.seleccionableSeleccionado : estilo.seleccionable} onClick={() => mostrarTabla('busto')}>
            MEDIDAS DE BUSTO
          </p>
        </div>
        <div className={estilo.subtitulo}>
          <p id="espalda" className={tablaSeleccionada === 'espalda' ? estilo.seleccionableSeleccionado : estilo.seleccionable} onClick={() => mostrarTabla('espalda')}>
            MEDIDAS DE ESPALDA
          </p>
        </div>
      </div>
      <table id="tabla-busto" className={tablaSeleccionada === 'busto' ? estilo.tablaMostrada : estilo.tablaEscondida}>
        <tr>
          <th className={estilo.tall}>TALLAS</th>
          <th className={estilo.anch}>ANCHO</th>
          <th className={estilo.lar}>LARGO</th>
        </tr>
        <tr>
          <td className={estilo.tall}></td>
          <td className={estilo.anch}></td>
          <td className={estilo.lar}></td>
        </tr>
        <tr>
          <td className={estilo.tall}></td>
          <td className={estilo.anch}></td>
          <td className={estilo.lar}></td>
        </tr>
        <tr>
          <td className={estilo.tall}></td>
          <td className={estilo.anch}></td>
          <td className={estilo.lar}></td>
        </tr>
      </table>

      <table id="tabla-espalda" className={tablaSeleccionada === 'espalda' ? estilo.tablaMostrada : estilo.tablaEscondida}>
        <tr>
          <th className={estilo.tall}>TALLAS</th>
          <th className={estilo.anch}>ANCHO</th>
          <th className={estilo.lar}>LARGO</th>
        </tr>
        <tr>
          <td className={estilo.tall}></td>
          <td className={estilo.anch}></td>
          <td className={estilo.lar}></td>
        </tr>
        <tr>
          <td className={estilo.tall}></td>
          <td className={estilo.anch}></td>
          <td className={estilo.lar}></td>
        </tr>
        <tr>
          <td className={estilo.tall}></td>
          <td className={estilo.anch}></td>
          <td className={estilo.lar}></td>
        </tr>
      </table>

    </div>
  )
}


const SeccionEnvios = () => {
  return (
    <>
      {/* Sección ENVIOS*/}

      <div className={estilo.contenedorAcordeon}>

        <h2>ENVÍOS</h2>

        <div className={estilo.acordeon}>
          <input type="radio" name="acordeon" id="btn-acordeon1" className={estilo.btnAcordeon} />

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
          <input type="radio" name="acordeon" id="btn-acordeon2" className={estilo.btnAcordeon} />

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
          <input type="radio" name="acordeon" id="btn-acordeon3" className={estilo.btnAcordeon} />

          <label for="btn-acordeon3" >&#9533;
            ¿Cómo puedo rastrear mi pedido?
          </label>

          <div className={estilo.contenidoAcordeon}>
            <p>En la página oficial de DHL, puedes encontrar la opción de "rastrear y envío" o bien,
              puedes escanear el QR que te lleva directo a la página.</p>
          </div>
        </div>

        <div className={estilo.acordeon}>
          <input type="radio" name="acordeon" id="btn-acordeon4" className={estilo.btnAcordeon} />

          <label for="btn-acordeon4"> &#9533;
            ¿Cuentan con cambios o reembolsos?
          </label>
          <div className={estilo.contenidoAcordeon}>
            <p>No contamos con reembolsos o cambios.</p>
            <p>Para evitar inconvenientes se les recomienda realizar la compra con cautela y revisar
              las medidas antes de seleccionar una talla.</p>
            <img src="./img/qr.png" className={estilo.imgQr} />
          </div>
        </div>

      </div>

      {/* Sección Pagos */}
      <div className={estilo.clasePagos}>
        <h2>PAGOS </h2>
        <br />
        <img src="./img/americanE.png" className={estilo.iconosPago} />
        <img src="./img/paypal.png" className={estilo.iconosPago} />
        <img src="./img/visa.png" className={estilo.iconosPago} />
        <img src="./img/mercadoPago.png" className={estilo.iconosPago} />
        <img src="./img/mastercard.png" className={estilo.iconosPago} />
        <img src="./img/oxxo.png" className={estilo.iconosPago} />
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