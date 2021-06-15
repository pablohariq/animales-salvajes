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
    let nombreArchivoImgAnimalSeleccionado = (await buscarNombresArchivosAnimal(animalSeleccionado)).nombreArchivoImagen 
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
        if((animalSeleccionado =="Seleccione un animal") || (edadAnimal=="Seleccione un rango de años")){
            throw("Ingrese todos los datos")
        }
        let imagen = (await buscarNombresArchivosAnimal(animalSeleccionado)).nombreArchivoImagen
        let comentarios = inputComentarios.value
        let sonido = await obtenerSonidoAnimal(animalSeleccionado);
        (()=> { //aquí está su IIFE
            if (!(!!comentarios)){
                throw("Ingrese todos los datos")
            }

        })();
        const nuevoAnimal = eval(`new ${animalSeleccionado}(animalSeleccionado,edadAnimal,imagen,comentarios,sonido)`)
        arregloAnimales.push(nuevoAnimal) //agrega el registro creado a un arreglo
        
        //dibujar animales
        dibujarAnimales(arregloAnimales)
        console.log(arregloAnimales)    
        //DESPUES de dibujar los animales agregamos los eventos de activar modal a todos sus <img>
        arregloAnimales.forEach((animal,i)=>{
            let imgAnimal = document.querySelector(`#animal-${i}`)
                imgAnimal.addEventListener("click", ()=>{activarModal(animal)})
        })

        //agregamos los eventos de reproducir sonido
        arregloAnimales.forEach((animal,i)=>{
            let audioAnimal = document.querySelector(`#audioAnimal-${i}`)
            audioAnimal.addEventListener("click", ()=>{
                if (animal.Nombre == "Leon"){
                    animal.Rugir()
                }
                else if(animal.Nombre == "Lobo"){
                    animal.Aullar()
                }
                else if(animal.Nombre == "Oso"){
                    animal.Gruñir()
                }
                else if(animal.Nombre == "Serpiente"){
                    animal.Sisear()
                }
                else if(animal.Nombre == "Aguila"){
                    animal.Chillar()
                }
            })
        })


        //resetear formulario, al no haber una etiqueta form es más dificil
        Array.from(document.getElementsByClassName("form-control")).forEach(e => e.value = "")
        espacioPreview.setAttribute("style","") //en rigor lo deja en blanco en lugar de resetearlo
        inputAnimal.value = "Seleccione un animal"
        inputEdad.value = "Seleccione un rango de años"
    } catch (error) {
        alert(error)
    }
})
