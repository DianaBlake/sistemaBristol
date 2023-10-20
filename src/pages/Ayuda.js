import React, { useState } from 'react'
import estilo from '../estilos/ayuda.module.css'
import Encabezado from '../components/Encabezado'
import Footer from '../components/Footer'
import regla from "../images/regla.PNG";
const SeccionTiendas = () => {
  return (
    <div>
      <h1>Seccion tiendas fisicas</h1>
      {/* Aqui ira el codigo correscpondiente a quien le haya tocado */}
    </div>
  )
}
const SeccionTallas = () => {
  const [tablaSeleccionada, setTablaSeleccionada] = useState(''); // Estado para rastrear la tabla seleccionada

  const mostrarTabla = (seleccion) => {
    setTablaSeleccionada(seleccion);
  };

  return (
    <div>
      <header className={estilo.contenedorHeader}>
        <img className={estilo.img} src={regla} />
            <div className={estilo.headerTitulos}>
                <h1>GUÍA DE TALLAS</h1>
            </div>
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
            <th  className={estilo.tall}>TALLAS</th>
            <th  className={estilo.anch}>ANCHO</th>
            <th  className={estilo.lar}>LARGO</th>
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
            <th  className={estilo.tall}>TALLAS</th>
            <th  className={estilo.anch}>ANCHO</th>
            <th  className={estilo.lar}>LARGO</th>
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
    <div>
      <h1>Seccion metodos de envio y pagos</h1>
      {/* Aqui ira el codigo correscpondiente a quien le haya tocado */}
    </div>
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