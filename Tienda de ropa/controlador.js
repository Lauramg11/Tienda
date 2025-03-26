import { simuladorCorreo, simuladorContraseña } from "./basededatosfalsa.js"
let inputNombre=document.getElementById("nombre")
let inputCorreo=document.getElementById("correo")
let inputContraseña=document.getElementById("contraseña")
let botonIngreso=document.getElementById("BotonIngreso")


botonIngreso.addEventListener("click", function(evento){
   evento.preventDefault()

let nombre=inputNombre.value
let Correo=inputCorreo.value
let Contraseña=inputContraseña.value
let nombreBaseDatos="Coco"
let contraseñaBaseDatos="00000"


if(nombre==ombreBaseDatos && Contraseña==contraseñaBaseDatos){
alert("Ok")

}else{
alert("revisa los datos ingresados")
}

i

})