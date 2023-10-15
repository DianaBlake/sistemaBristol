import React from 'react'
import Encabezado from '../components/Encabezado'
import estilo from '../estilos/orders.module.css'
import CarritoTabla from '../components/CarritoTabla'

function OrderPage() {

  return (
    <>
      <Encabezado />
      <div>
        <p className={estilo.Titulo}>Completa tu pedido</p>
        <CarritoTabla/>
      </div>
    </>
  )
}

export default OrderPage