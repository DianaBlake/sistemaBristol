import React, { useEffect, useState } from 'react'
import estilo from '../estilos/orders.module.css'
import { BsPlusSquare, BsDashSquare } from 'react-icons/bs'
import axios from 'axios'

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


const CarritoTabla = () => {


  const [productos, setProductos] = useState([])

  useEffect(() => {
    axios
      .get("https://app-bristol-nsqoxt2oxq-uc.a.run.app/UsuarioPedidos?correo="+getCookie("username")+"&estado=0")
      .then((response) => {
        // sessionStorage.setItem("correo", response.data[0].correo);
        setProductos(response.data)
      })
      .catch((error) => console.error(error));
  })

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
                  <p className={estilo.Talla}>{articulo.nombre}</p>
                </div>
              </div>
              <div className={estilo.celdaCantidad}>
                <BsPlusSquare />
                <p className={estilo.Producto}>{articulo.cantidad}</p>
                <BsDashSquare />
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
        {tabla(productos)}
      </div>
    </div>
  )
}

export default CarritoTabla