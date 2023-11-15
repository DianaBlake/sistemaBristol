import React from 'react'
import estilos from "../estilos/productos.module.css"
import { useFetch } from '../Controllers/useFetch';

function ProductsComp(categoria) {
  // const [productos, setProductos] = useState([])
  //   axios
  //     .get("https://app-bristol-nsqoxt2oxq-uc.a.run.app/Productos/"+categoria)
  //     .then((response) => {
  //       setProductos(response.data);
  //     })
  //     .catch((error) => console.error(error));

      const { data } = useFetch("https://app-bristol-nsqoxt2oxq-uc.a.run.app/Productos/"+categoria)

      console.log(data);

  return (
    <>
     {data.length > 0 && (
      <div className={estilos.Productos}>
        {data.map((articulo) => (
            <div key={articulo.codigo} className={estilos.Producto} onClick={() => {
              // Redirecciona al usuario a la página individual del producto
              window.location.href = "/producto/"+articulo.codigo
            }}>
              <img src={articulo.Foto} alt="Foto del producto" className={estilos.fotoProducto}/>
              <hr/>
              <p className={estilos.modeloProducto}>{articulo.modelo}</p>
              <p className={estilos.categoriaProducto}>{articulo.categoria}</p>
              <p className={estilos.precioProducto}>${articulo.precio}</p>
            </div>
        ))}
      </div>
     )} 
    </>
  )
}

export default ProductsComp