import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Encabezado from "../components/Encabezado";
import Footer from "../components/Footer";
import estilo from '../estilos/productos.module.css'
import { useFetch } from "../Controllers/useFetch";
import { BsPlusSquare, BsDashSquare } from 'react-icons/bs'
import axios from "axios";




const GetPedido = () =>{
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
//   const { data } = useFetch("https://app-bristol-nsqoxt2oxq-uc.a.run.app/UsuarioPedidos?correo=" + getCookie("username") + "&estado=0")
    // console.log(data);
    console.log(getCookie("carrito"));
}


function ProductoPage() {

    const { codigo } = useParams()

    const [cantidad, setCantidad] = useState(1)
    const [talla, setTalla] = useState('')
    // const [producto, setProducto] = useState([])
    //     axios
    //         .get("https://app-bristol-nsqoxt2oxq-uc.a.run.app/Producto/" + codigo)
    //         .then((response) => {
    //             setProducto(response.data[0])
    //         })
    //         .catch((error) => console.error(error));

    // console.log(codigo);

    const { data } = useFetch("https://app-bristol-nsqoxt2oxq-uc.a.run.app/Producto/" + codigo)

    
    
    
    async function AgregarCarrito(modelo, cantidad, talla) {

        // let idPedido = getCookie("carrito")

        // console.log(getCookie("carritos"));
        
        await axios({
            method: 'POST', url: 'https://app-bristol-nsqoxt2oxq-uc.a.run.app/Articulos', data: {
                idPedido: 3,
                modelo: modelo,
                cantidad: cantidad,
                talla: talla,
            }
        })
            .then(function (respuesta) {
                console.log(respuesta.data);
            }).catch(function (error) {
                console.log("ERROR EN LA SOLICITUD", error)
            })
    }


    return (
        <>
            <Encabezado />
            {data.map((data) => (
                <div key={data.codigo} className={estilo.ProductoIndividual}>
                    <div className={estilo.fotoIndividual}>
                        <img src={data.Foto} alt="Foto del producto" />
                    </div>
                    <div className={estilo.infoIndividual}>
                        <p className={estilo.codigoIndividual}>{data.codigo}</p>
                        <p className={estilo.tituloIndividual}>{data.modelo}</p>
                        <p className={estilo.categoriaIndividual}>{data.categoria}</p>
                        <p className={estilo.descripcionIndividual}>{data.descripcion}</p>
                        <p className={estilo.precioIndividual}>${data.precio}</p>
                        <div className={estilo.cantidad}>
                            <BsDashSquare onClick={() => setCantidad(cantidad === 1 ? 1 : cantidad - 1)} />
                            <p>{cantidad}</p>
                            <BsPlusSquare onClick={() => setCantidad(cantidad + 1)} />
                        </div>
                        <div className={estilo.talla}>
                            <p className={talla === "CH" ? estilo.opcTallaSelected : estilo.opcTalla} onClick={() => setTalla('CH')}>CH</p>
                            <p className={talla === "M" ? estilo.opcTallaSelected : estilo.opcTalla} onClick={() => setTalla('M')}>M</p>
                            <p className={talla === "G" ? estilo.opcTallaSelected : estilo.opcTalla} onClick={() => setTalla('G')}>G</p>
                        </div>
                        <div onClick={() => { AgregarCarrito(data.codigo, cantidad, talla) }} className={estilo.btnAgregar}>AGREGAR A TU BOLSA</div>
                    </div>
                </div>
            ))}
            <Footer />
        </>
    )
}

export default ProductoPage
