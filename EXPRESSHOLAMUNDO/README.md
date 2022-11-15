/// CONCEPTOS DE REACT ///

// COMANDOS IMPORTANTES

npm start = inicia el servidor de desarrollo y lanza un navegador.
npm test = ejecuta las pruebas
npm run build = empaqueta la aplicacion para produccion en una carpeta llamada build.
npm run eject = me permite manualmente las libres y configuracion que utiliza create-reatc-app (tener cuidado con este comando)

// JSX

- produce elementos react
- Puedo utilizar estructuras de control (if for)
- puedo asignar variables
- puedo recibirlo como argumento o retorno de funciones

// REGLAS JSX

- toda etiqueta debe cerrarse con /> = <br />
- algunos atributos HTML cambian (class -> className) (for -> htmlFor)
- Los componentes deben devolver un solo elemento padre
- los atributos de un elemento puede aceptar valores de tipo String o expresiones entrecomilladas

// COMPONENETES 

- Permiten separar el codigo y los elementos de la interfaz en pequeñas piezas independientes y que se puedan reutilizar
(están aisladas las unas de las otras)
- el objetivo de cada componente es independiente, encapsula marcado, estilo y estado.

// TIPOS DE COMPONENTE

class Titulo extends componente {
    render (){
        return <h1>"hola mundo"</h1>;
    }
}

const Titulo = () => {
    return <h1>"hola mundo"</h1>;
}

// UTILIZAR UN COMPONENTE

import Titulo from './Titulo'

function App {
    return<Titulo/>;
}


// PROPIEDADES

- son props (agrupacion de valores en un objeto) recibidos de un padre a un hijo 
- puede recibir string, numbers, booleans, arrays, objects, functions, react elements, reat componets

