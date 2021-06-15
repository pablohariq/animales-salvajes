import {obtenerDatosAnimales, buscarNombresArchivosAnimal, obtenerSonidoAnimal, dibujarAnimal} from './funciones.js';
import {Animal, Leon, Lobo, Oso, Serpiente, Aguila} from  './ClasesAnimales.js'

(async () =>{
    let r = await buscarNombresArchivosAnimal("Serpiente")
    console.log(r)
})()

//elementos del dom
const [inputAnimal, inputEdad, inputComentarios] = document.getElementsByClassName("form-control") //los tres comparten la clase "form-control"
const espacioPreview = document.querySelector("#preview")
const btnRegistrar = document.querySelector("#btnRegistrar")

//poner la foto del animal al cambiar el selector
inputAnimal.addEventListener("change", async ()=>{
    let animalSeleccionado = inputAnimal.value
    console.log(animalSeleccionado)
    let nombreArchivoImgAnimalSeleccionado = (await buscarNombresArchivosAnimal(animalSeleccionado)).nombreArchivoImagen //el parentesis en await es importante antes de extraer la propiedad nombreArchivoImagen
    console.log(nombreArchivoImgAnimalSeleccionado)
    espacioPreview.setAttribute("style",`background-image: url(assets/imgs/${nombreArchivoImgAnimalSeleccionado})`)
})

let deckAnimales = document.querySelector("#deckAnimales")
let arregloAnimales = []
btnRegistrar.addEventListener("click", async(e) =>{
    e.preventDefault();
    let animalSeleccionado = inputAnimal.value
    let edadAnimal =  inputEdad.value
    let imagen = (await buscarNombresArchivosAnimal(animalSeleccionado)).nombreArchivoImagen
    let comentarios = inputComentarios.value
    let sonido = await obtenerSonidoAnimal(animalSeleccionado)
    const nuevoAnimal = new Animal(animalSeleccionado,edadAnimal,imagen,comentarios,sonido)
    arregloAnimales.push(nuevoAnimal)
    console.log(nuevoAnimal)
    console.log(arregloAnimales)
    //dibujar animal
    dibujarAnimal(nuevoAnimal,deckAnimales)

})

