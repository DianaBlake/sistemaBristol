import React from 'react'
import Encabezado from '../components/Encabezado'
import estilo from '../estilos/orders.module.css'
import { BsPlusSquare, BsDashSquare } from 'react-icons/bs'
import Footer from '../components/Footer'
import { useFetch } from '../Controllers/useFetch'

function getCookie(name) {
  const cookies = document.cookie.split(";");

  for (const cookie of cookies) {
    const parts = cookie.split("=");

    if (parts[0] === name) {
      return decodeURIComponent(parts[1]);
    }
  }
  return undefined;
}


function totalPedido(data) {
  let total = 0;
  data.map((parametro) => {
    // console.log(parametro.idPedido);
    parametro.articulos.map((articulo) => (
      total = total + (articulo.precio * articulo.cantidad)
    ))
  });
  return total
}

function OrderPage() {

  const expires = new Date(Date.now() + (1000 * 60 * 60 * 24)); // 24 horas
  document.cookie = `username=${"usuario2@gmail.com"}; expires=${expires.toUTCString()}; path=/`;
  document.cookie = `carrito=${3}; expires=${expires.toUTCString()}; path=/`;
  

  const { data } = useFetch("https://app-bristol-nsqoxt2oxq-uc.a.run.app/UsuarioPedidos?correo=" + getCookie("username") + "&estado=0")

  const totalCuenta = totalPedido(data)

  console.log(getCookie("carrito"));

  const CarritoTabla = () => {




    const tabla = (pedido) => {
      return pedido.map((parametro) => {
        return (
          <div key={parametro.idPedido} className={estilo.divAjuste}>
            {parametro.articulos.map((articulo) => (
              <>
                <div key={articulo.codigoProducto} className={estilo.celdaProducto} >
                  <img src={articulo.link} alt="Producto imagen" />
                  <div>
                    <p className={estilo.Producto}>{articulo.modelo}</p>
                    <p className={estilo.Categoria}>{articulo.categoria}</p>
                    <p className={estilo.Categoria}>{articulo.talla}</p>
                    <p className={estilo.Talla}>{articulo.nombre}</p>
                  </div>
                </div>
                <div className={estilo.celdaCantidad}>
                  <BsDashSquare />
                  <p className={estilo.Producto}>{articulo.cantidad}</p>
                  <BsPlusSquare />
                </div>
                <div className={estilo.celdaPrecio}>
                  <p className={estilo.Producto}>${articulo.precio * articulo.cantidad}</p>
                </div>
              </>
            ))}
          </div>
        );
      });
    }

    return (
      <div className={estilo.tablaOrden}>
        <div className={estilo.areaEncabezado}>
          <p className={estilo.encabezadoTitle1}>Producto</p>
          <p className={estilo.encabezadoTitle2}>Cantidad</p>
          <p className={estilo.encabezadoTitle3}>Precio</p>
        </div>
        <div className={estilo.areaProductos}>
          {tabla(data)}
        </div>
      </div>
    )
  }


  return (
    <>
      <Encabezado />
      <div>
        <p className={estilo.Titulo}>COMPLETA TU PEDIDO</p>
        <div className={estilo.areaCompra}>
          <div className={estilo.seccionBolsa}>
            <CarritoTabla />
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
            <p className={estilo.tituloSecundario}>TOTAL: ${totalCuenta}</p>
            <button type="" className={estilo.botonPago}>REALIZAR COMPRA</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default OrderPage