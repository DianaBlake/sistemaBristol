import React, { useState } from 'react'
import estilo from '../estilos/ayuda.module.css'

const SeccionEnvios = () => {
  return (
    <div>
      <h1>Seccion metodos de envio</h1>
    </div>
  )
}
const SeccionPagos = () => {
  return (
    <div>
      <h1>Seccion metodos de pago</h1>
    </div>
  )
}
const SeccionTallas = () => {
  return (
    <div>
      <h1>Seccion tallas y medidas</h1>
    </div>
  )
}
const SeccionTiendas = () => {
  return (
    <div>
      <h1>Seccion tiendas fisicas</h1>
    </div>
  )
}
const SeccionPreguntas = () => {
  return (
    <div>
      <h1>Seccion preguntas frecuentes</h1>
    </div>
  )
}

function Ayuda() {
  const [seccion, setSeccion] = useState(0)

  const cambiarSeccion = () => {
    switch (seccion) {
      case 0:
        return <SeccionEnvios />
      case 1:
        return <SeccionPagos />
      case 2:
        return <SeccionTallas />
      case 3:
        return <SeccionTiendas />
      case 4:
        return <SeccionPreguntas />
      default:
        break
    }
  }

  const Encabezado = () => {
    return (
      <div className={estilo.ayuda}>
        <div className={estilo.secAyuda} onClick={() => { setSeccion(0) }}>
          <h2>Envios</h2>
        </div>
        <div className={estilo.secAyuda} onClick={() => { setSeccion(1) }}>
          <h2>Metodos de pago</h2>
        </div>
        <div className={estilo.secAyuda} onClick={() => { setSeccion(2) }}>
          <h2>Tallas y medidas</h2>
        </div>
        <div className={estilo.secAyuda} onClick={() => { setSeccion(3) }}>
          <h2>Tiendas fisicas</h2>
        </div>
        <div className={estilo.secAyuda} onClick={() => { setSeccion(4) }}>
          <h2>Preguntas frecuentes</h2>
        </div>
      </div>
    )
  }


  return (
    <>
      <Encabezado />
      <div className={estilo.SeccionArea}>
        {cambiarSeccion()}
      </div>
    </>
  )
}

export default Ayuda