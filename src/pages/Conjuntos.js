import React from 'react'
import Encabezado from '../components/Encabezado'
import Footer from '../components/Footer'
import ProductsComp from '../components/ProductsComp'
import estilo from '../estilos/principal.module.css'

function Conjuntos() {
  return (
    <>
      <Encabezado />
      <p className={estilo.Titulo}>Conjuntos</p>
      {
        ProductsComp('Set')
      }
      <Footer />
    </>
  )
}

export default Conjuntos