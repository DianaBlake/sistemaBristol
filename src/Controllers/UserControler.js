import axios from "axios"
import { useFetch } from "./useFetch";

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

function Login(correo) {
    // const [session, setSession] = useState()
    let datos = []

    axios
      .get("http://localhost:5000/Usuario/"+correo)
      .then((response) => {
        datos = response.data;
      })
      .catch((error) => console.error(error));

    sessionStorage.setItem("correo", datos.correo)

    return datos
}

function GetIdPedido() {

  const { data } = useFetch("https://app-bristol-nsqoxt2oxq-uc.a.run.app/UsuarioPedidos?correo=" + getCookie("username") + "&estado=0")

  let total = 0;
  var valores = []
  data.map((parametro) => {
    // console.log(parametro.idPedido);
    valores.push(parametro.idPedido)
    parametro.articulos.map((articulo) => {
      total = total + (articulo.precio * articulo.cantidad)
    })
  });
  // valores.push(total)
  console.log(valores);
  return valores

  
}

export default Login
export { GetIdPedido }