import React from 'react'
import estiloCar from '../estilos/carrito.module.css'
import { AiOutlineClose } from 'react-icons/ai'

function Carrito() {

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

    const tabla = productos.map((articulo)=>(
        <tr key={articulo.nombre}>
            <td>
                <div className={estiloCar.celdaProduct}>
                    <img src={articulo.foto} alt="" className={estiloCar.imgProduct} />
                    <div>
                        <p className={estiloCar.nombreP}>{articulo.nombre}</p>
                        <p className={estiloCar.cateP}>{articulo.categoria}</p>
                    </div>
                </div>
            </td>
            <td>
                <div className={estiloCar.celdaCantidad}>
                    <button type="" className={estiloCar.butonQuanty}>-</button>
                    <p>1</p>
                    <button type="" className={estiloCar.butonQuanty}>+</button>
                </div>
            </td>
            <td>
                <div className={estiloCar.celdaPrecio}>
                    <p>{articulo.precio}</p>
                </div>
            </td>
        </tr>
    ))

    return (
        <div className={estiloCar.ventanaCar}>
            <div className={estiloCar.topCar}>
                <h1>Tu carrito de compra</h1>
                <AiOutlineClose />
            </div>
            <div className={estiloCar.contentCar}>
                <table className={estiloCar.tablaCarrito}>
                    <thead className={estiloCar.tablaCabeza}>
                        <tr className={estiloCar.tablaEncabezado}>
                            <th>Producto</th>
                            <th>Cantidad</th>
                            <th>Precio</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tabla}
                    </tbody>
                </table>
            </div>
            <div className={estiloCar.pieCar}>
                <div className={estiloCar.total}>
                    <h2>Total:</h2>
                    <h2>$2323.43</h2>
                </div>
                <button type="" className={estiloCar.botonPago}>PROCEDER AL PAGO</button>
            </div>
        </div>
    )
}

export default Carrito