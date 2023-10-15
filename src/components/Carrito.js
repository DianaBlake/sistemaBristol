import React from 'react'
import estiloCar from '../estilos/carrito.module.css'
import { AiOutlineClose } from 'react-icons/ai'
import CarritoTabla from './CarritoTabla'

const Carrito = ({ setCarshop }) => {

    return (
        <div className={estiloCar.ventanaCar}>
            <div className={estiloCar.topCar}>
                <h1>Tu carrito de compra</h1>
                <AiOutlineClose className={estiloCar.iconoX} onClick={()=>setCarshop(false)}/>
            </div>
            <div className={estiloCar.contentCar}>
                <CarritoTabla/>
            </div>
            <div className={estiloCar.pieCar}>
                <div className={estiloCar.total}>
                    <h2>Total:</h2>
                    <h2>{2330}</h2>
                </div>
                <a href='/orderpage' className={estiloCar.botonPago}>PROCEDER AL PAGO</a>
            </div>
        </div>
    )
}

export default Carrito