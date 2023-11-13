import React from "react";
import { useParams } from "react-router-dom";
import Encabezado from "../components/Encabezado";
import Footer from "../components/Footer";
import estilo from '../estilos/productos.module.css'
import { useFetch } from "../Controllers/useFetch";


function ProductoPage () {

    const { codigo } = useParams()
    // const [producto, setProducto] = useState([])
    //     axios
    //         .get("https://app-bristol-nsqoxt2oxq-uc.a.run.app/Producto/" + codigo)
    //         .then((response) => {
    //             setProducto(response.data[0])
    //         })
    //         .catch((error) => console.error(error));

    // console.log(codigo);

    const { data } = useFetch("https://app-bristol-nsqoxt2oxq-uc.a.run.app/Producto/"+codigo)

    console.log(data);


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
                        <div onClick={()=>{}} className={estilo.btnAgregar}>AGREGAR A TU BOLSA</div>
                    </div>
                </div>
            ))}
            <Footer />
        </>
    )
}

export default ProductoPage
