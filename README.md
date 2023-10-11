Proyecto web para marca de ropa Bristol
# INSTRUCCIONES DE INICIO

## Clonar el repositorio mediante HTTPS
1. En consola escribir el comando `git clone https://github.com/DianaBlake/sistemaBristol.git`, esto creara la carpeta sistemaBristol.
2. Ingresar dentro de la carpeta con `cd sistemaBristol`

## Descargar las dependencias
Para poder ejecutar el proyecto se necesita descargar las dependencias que se ocupan, para esto ejecutarán el siguiente comando `npm install`, esto creara la carpeta **node_modules**. 
El comando para ejecutar el proyecto es: `npm start`

## Crear su rama localmente
Necesitamos que creen su rama para que agreguen lo que les tocó, una vez hayan terminado su parte se revisará y se mezclará con la rama main en caso de que no haya mas correcciones.
1. Para crear su rama localmente ejecuten el siguiente comando `git branch RamaNombre`.
2. Verifiquen que su rama se haya creado correctamente con `git branch`. Se mostrara la lista de ramas locales y aparecerá un asterisco en el nombre de la rama donde se encuentran actualmente.
3. Cambien de rama usando `git checkout RamaNombre` y nuevamente ejecuten `git branch`. Revisen que el asterisco se encuentre en el nombre de su rama para comenzar a trabajar.

## Trabajen en su rama
Realicen la parte que les tocó en su respectiva rama, por ahora solamente estarán trabajando en el archivo [Ayuda.js](src/pages/Ayuda.js). En este archivo se encuentran los comentarios de donde deben de comenzar a escribir codigo (Dependiendo de que les haya tocado).
Recuerden que pueden ayudarse de `git add .` y `git commit -m "comentario de sus cambios"` en ese orden para guardar sus avances localmente y llevar un registro de sus avances.

## Subir su rama al repositorio
Cuando terminen su parte de forma local favor de avisar para que los agreguemos como colaboradores en este repositorio y puedan subir toda su rama con sus cambios y asi podamos revisarla.
Para subir su rama verifiquen que no tengan commits pendientes en su codigo y ejecuten `git push origin RamaNombre`


# ACLARACIONES PARA EL DESARROLLO DEL PROYECTO

## Iconos
Para todo el proyecto se estan usando los [Iconos de React](https://react-icons.github.io/react-icons), si ocupas algun icono tendras que buscarlo en esa pagina.

1. Importar el icono a tu codigo:
   `import { FaBeer } from 'react-icons/fa';`.
   **FaBeer**: Nombre completo del icono.
   **react-icons/fa**: Nombre de la coleccion a la que pertenece el icono.
   
   En este caso el nombre completo del icono es **FaBeer**, las dos primeras letras del nombre representan la coleccion del icono, de esta manera sera mas facil identificar si tienes iconos de la misma coleccion.
   
   *Nota*
   * En caso de ocupar iconos de diferentes colecciones tendras que hacer los imports necesarios por cada coleccion.
   * Si usas varios iconos pero de la misma coleccion, basta con poner una coma dentro de las llaves del import para agregar el otro icono.

2. Usar el icono en el codigo:
   Para usar el icono basta con `<NombredelIcono/>` en donde se quiera colocar. Ejemplo `<FaBeer/>`

### Ejemplo de como se usaria:
```
import { FaBeer } from 'react-icons/fa';
class Widget extends React.Component {
  render() {
    return <h3> Icono de cerveza: <FaBeer /></h3>
  }
}
```



## Manejo de estilos
### Nombre del archivo CSS
En react se utiliza un manejo de estilos mediante modulos, las clases CSS no se usan como normalmente se usan en HTML puro. Es por eso que al crear un archivo de estilo se nombra de la siguiente manera `estilo.module.css`, agregando ".module.css" despues del nombre del archivo.
### Import del archivo CSS
Para poder usar los estilos que se encuentran en nuestro archivo CSS tenemos que importarlo de la siguiente manera `import estilos from 'estilo.module.css'`, siendo "estilos" la variable que usaremos para asignar estilo al elemento deseado
### Crear los estilos en el archivo CSS
Para crear estilos en el archivo CSS tendremos que crearlos mediante un punto y el nombre del estilo. Ejemplo:
```
.TextoGrandeCentrado{
  font-size: 10vh;
  text-align: center;
}
```
### Usar el estilo en el elemento deseado
Dentro de la etiqueta de cualquier elemento colocaremos el atributo "className"  con la variable del import y el nombre del estilo. Ejemplo de uso:
```
render(
  <h1 className={estilos.TextoGrandeCentrado}>
    Envios
  </h1>
)
```

Por el momento solo trabajaran en la clase [Ayuda.js](src/pages/Ayuda.js). Es por eso que no sera necesario que creen otra hoja de estilos, sigan agregando estilos dentro de [ayuda.module.css](src/estilos/ayuda.module.css) con el formato y la forma de usarlo que ya se explico anteriormente.


