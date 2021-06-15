import {obtenerDatosAnimales, buscarNombresArchivosAnimal, obtenerSonidoAnimal, dibujarAnimales, activarModal} from './funciones.js';
import {Animal, Leon, Lobo, Oso, Serpiente, Aguila} from  './ClasesAnimales.js';

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

const divAnimales = document.querySelector("#Animales")
const arregloAnimales = []
console.log(arregloAnimales)
btnRegistrar.addEventListener("click", async(e) =>{
    try {
        e.preventDefault();
        let animalSeleccionado = inputAnimal.value
        let edadAnimal =  inputEdad.value
        let imagen = (await buscarNombresArchivosAnimal(animalSeleccionado)).nombreArchivoImagen
        let comentarios = inputComentarios.value
        let sonido = await obtenerSonidoAnimal(animalSeleccionado);
        (()=> {
            if (!(!!(animalSeleccionado) & !!(edadAnimal) & !!(comentarios))){
                throw("Ingrese todos los datos")
            }
        })();
        const nuevoAnimal = eval(`new ${animalSeleccionado}(animalSeleccionado,edadAnimal,imagen,comentarios,sonido)`)
        arregloAnimales.push(nuevoAnimal) //agrega el registro creado a un arreglo
        
        //dibujar animales
        dibujarAnimales(arregloAnimales)
        console.log(arregloAnimales)    
        //DESPUES de dibujar los animales agregamos los eventos a todos sus <img>
        arregloAnimales.forEach((animal,i)=>{
            let imgAnimal = document.querySelector(`#animal-${i}`)
                imgAnimal.addEventListener("click", ()=>{activarModal(animal)})
        })
    
        //resetear formulario, al no haber una etiqueta form es más dificil
        Array.from(document.getElementsByClassName("form-control")).forEach(e => e.value = "")
        espacioPreview.setAttribute("style","") //en rigor lo deja en blanco en lugar de resetearlo
        
    } catch (error) {
        alert(error)
    }
})
