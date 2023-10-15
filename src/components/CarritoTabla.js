import React from 'react'
import estilo from '../estilos/orders.module.css'
import { BsPlusSquare, BsDashSquare } from 'react-icons/bs'

let productos = [
    {
      nombre: "Britany",
      categoria: "Bralette",
      precio: 200,
      foto: '../fotos/Carrusel1.png'
    },
    {
      nombre: "Fatima",
      categoria: "Bralette",
      precio: 100,
      foto: '../fotos/Carrusel1.png'
    },
    {
      nombre: "Greicy",
      categoria: "Bralette",
      precio: 250,
      foto: '../fotos/Carrusel1.png'
    },
    {
      nombre: "Agata",
      categoria: "Bralette",
      precio: 190,
      foto: '../fotos/Carrusel1.png'
    },
    {
      nombre: "Emilia",
      categoria: "Bralette",
      precio: 90,
      foto: '../fotos/Carrusel1.png'
    },
  ]

function CarritoTabla() {

    const tabla = productos.map((articulo) => (
        <>
          <div className={estilo.celdaProducto}>
            <img src={articulo.foto} alt="Producto imagen" />
            <div>
              <p className={estilo.Producto}>{articulo.nombre}</p>
              <p className={estilo.Categoria}>{articulo.categoria}</p>
              <p className={estilo.Talla}>{articulo.nombre}</p>
            </div>
          </div>
          <div className={estilo.celdaCantidad}>
            <BsPlusSquare />
            <p className={estilo.Producto}>2</p>
            <BsDashSquare />
          </div>
          <div className={estilo.celdaPrecio}>
            <p className={estilo.Producto}>${articulo.precio}</p>
          </div>
        </>
      ))

    return (
        <div className={estilo.tablaOrden}>
            <div className={estilo.areaEncabezado}>
                <p className={estilo.encabezadoTitle1}>Producto</p>
                <p className={estilo.encabezadoTitle2}>Cantidad</p>
                <p className={estilo.encabezadoTitle3}>Precio</p>
            </div>
            <div className={estilo.areaProductos}>
                {tabla}
            </div>
        </div>
    )
}

export default CarritoTabla