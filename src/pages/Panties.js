import React from 'react'
import Encabezado from '../components/Encabezado'
import Footer from '../components/Footer'
import estilo from '../estilos/principal.module.css'
import ProductsComp from '../components/ProductsComp'

function Panties() {
  return (
    <>
    <Encabezado/>
    <p className={estilo.Titulo}>Panties</p>
      {
        ProductsComp('Pantie')
      }
    <Footer/>
    </>
  )
}

export default Panties