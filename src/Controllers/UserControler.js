import axios from "axios"

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

export default Login