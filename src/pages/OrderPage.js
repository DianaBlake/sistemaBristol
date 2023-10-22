import React from 'react'
import Encabezado from '../components/Encabezado'
import estilo from '../estilos/orders.module.css'
import CarritoTabla from '../components/CarritoTabla'

function OrderPage() {

  return (
    <>
      <Encabezado />
      <div>
        <p className={estilo.Titulo}>COMPLETA TU PEDIDO</p>
        <div className={estilo.areaCompra}>
          <div className={estilo.seccionBolsa}>
            <CarritoTabla/>
          </div>
          <div className={estilo.seccionPago}>
            <p className={estilo.tituloSecundario}>Método de pago</p>
            <div className={estilo.seccionPagoInfo}>
              <p className={estilo.textoNormalIZQ}>Subtotal: </p>
              <p className={estilo.textoNormalDER}>SUB</p>
              <p className={estilo.textoNormalIZQ}>Descuento: </p>
              <p className={estilo.textoNormalDER}>DES</p>
              <p className={estilo.textoNormalIZQ}>Cupones: </p>
              <p className={estilo.textoNormalDER}>CUP</p>
              <p className={estilo.textoNormalIZQ}>Envío: </p>
              <p className={estilo.textoNormalDER}>ENV</p>
            </div>
            <button type="" className={estilo.botonPago}>REALIZAR COMPRA</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default OrderPage