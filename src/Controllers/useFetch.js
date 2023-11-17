import axios from "axios"
import { useState, useEffect } from "react"


function useFetch(url) {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [controller, setController] = useState(null)

    useEffect(() => {
        const abortcontroller = new AbortController()
        setController(abortcontroller)
        setLoading(true)
        fetch(url, {signal:abortcontroller.signal})
            .then(response => response.json())
            .then((data) => setData(data))
            .catch((error)=> {
                if (error.name === "AbortError") {
                    console.log("Solicitud cancelada")
                } else {
                    setError(error)
                }
            })
            .finally(()=>setLoading(false))
    },[url])

    const handleCancelRequest = () =>{
        if (controller) {
            controller.abort()
            setError("Solicitud cancelada")
        }
    }

    return {data, loading, error, handleCancelRequest}

}


async function aumentarCantidad(pedido, modelo, talla, cantidad) {
    console.log(pedido, modelo, talla, cantidad);
    await axios({
        method: 'POST', url: 'https://app-bristol-nsqoxt2oxq-uc.a.run.app/Articulos', data: {
            idPedido: pedido,
            modelo: modelo,
            cantidad: cantidad,
            talla: talla
        }
    })
        .then(function (respuesta) {
            console.log("jola");
            console.log(respuesta.data);
        }).catch(function (error) {
            console.log("ERROR EN LA SOLICITUD", error)
        })
}

async function reducirCantidad(idArticulos) {
    await axios({
        method: 'DELETE', url: 'https://app-bristol-nsqoxt2oxq-uc.a.run.app/Articulos/'+idArticulos})
        .then(function (respuesta) {
            console.log("jola");
            console.log(respuesta.data);
        }).catch(function (error) {
            console.log("ERROR EN LA SOLICITUD", error)
        })
}

export default useFetch

export { aumentarCantidad, reducirCantidad }