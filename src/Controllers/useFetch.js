import { useState, useEffect } from "react"


export function useFetch(url) {

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