import React from 'react'
import Encabezado from '../components/Encabezado'
import Footer from '../components/Footer'
import estilo from '../estilos/principal.module.css'
import ProductsComp from '../components/ProductsComp'

function Bralettes() {
  return (
    <>
    <Encabezado/>
    <p className={estilo.Titulo}>Bralettes</p>
    {
      ProductsComp('Bralette')
    }
    <Footer/>
    </>
  )
}

export default Bralettes