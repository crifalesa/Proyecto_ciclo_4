// funciones de llamado
function saludar (){
    console.log("Hola grupo, como están?") 
}
saludar()

// funciones de retorno
function saludar2 (){
    return "hola grupo, como esta"
}
const resultado = saludar2()
console.log(resultado)

//puedo retornar diferentes cosas
function retornar(){
    return {name: "cris", lastname: "leon"}
}
console.log (retornar())

//paradigma de la programacion 
function saludo3(){
    return function(){
        return "mensaje dentro de una funcion"
    }

}
console.log(saludo3()())

//funciones con parametros
function saludar4(name){
    return "hola " + name + ", buenas  noches"
}
console.log(saludar4("cris"))
console.log(saludar4(" lucy"))

//funciones con varios parametros
function sumar (x, y){
    return x + y
}
console.log(sumar(110, 3450))
console.log(sumar(234560, 2933939))

//parametros por defecto
function sumar2(x, y){
    if (y === undefined){
        y=0
    }
    return x + y
}
console.log (sumar2(10))

//objetos JS
const user ={
    name: "cris",
    apellido: "leon",
    age: 33,
    address: {
        pais: "colombia",
        ciudad: "bogota",
        direccion: "calle 18 b 41-02",
    },
    amigos:["luis", "enrique", "diego"],
    active: true,
    enviarEmail: function (){
        return "enviando email al usuario"
    }
}
console.log(user)
console.log (user.address)

//declaracion de constantes usadas dentro del objeto

const nombre = "cristhian"
const precio = "5000"

const newProducto ={
    nombre: nombre,
    precio: precio,
}
console.log (newProducto)

//asi acorto codigo
const newProducto2 ={
    nombre,
    precio,
}
console.log (newProducto2)

//manipulaciondel DOM - documento principal
const tittle =document.createElement ("h1")
tittle.innerText= "Hola tripulantes"
document.body.append(tittle)


const button = document.createElement("button")
button.innerText = "buscar"
document.body.append(button)

// manejadores de eventos (event handler)

button.addEventListener("click", function (){
    console.log("me estan presionando")
    alert ("me presionaron")
})

button.addEventListener("click", function (){
    tittle.innerText= "Actualice el texto con JS"
})

//descomponer objetos
const userObject ={
    name: "cris",
    edad: 33,

}
function printInfor(userObject){
    return "<h2>Hola " + userObject.name + "</h2"
}
console.log(printInfor(userObject))
document.body.innerHTML = printInfor(userObject)
