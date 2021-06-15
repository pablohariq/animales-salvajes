//consulta asincrona a la api
const obtenerDatosAnimales = async () =>{
    let response = await fetch("/animales-salvajes/animales.json")
    let data = await response.json()
    let {animales} = data
    // console.log(animales)
    return animales
}

// console.log(obtenerDatosAnimales())

//retorna un objeto con los nombres de archivo (string) de los recursos asociados a un animal (imagen, sonido)
const buscarNombresArchivosAnimal = async (tipoanimal) =>{
    let datosAnimales = await obtenerDatosAnimales()
    let indiceCoincidencia = datosAnimales.findIndex(elemento => elemento.name == tipoanimal)
    let nombreArchivoImagen = datosAnimales[indiceCoincidencia].imagen //string
    let nombreArchivoSonido = datosAnimales[indiceCoincidencia].sonido
    let nombresArchivosAnimal = {"nombreArchivoImagen": nombreArchivoImagen, "nombreArchivoSonido": nombreArchivoSonido}
    return nombresArchivosAnimal
}

const obtenerSonidoAnimal = async (tipoanimal) =>{
    //identificar sonido del animal a partir de su archivo de sonido registrado en el json
    let nombresArchivosAnimal = await buscarNombresArchivosAnimal(tipoanimal)
    let sonido = nombresArchivosAnimal.nombreArchivoSonido.split(".")[0]
    return(sonido)
}

const dibujarAnimales = (animales) => {
    const divAnimales = document.querySelector("#Animales")
    divAnimales.innerHTML = ""
    animales.forEach((animal,i) =>{
        let imgUrl = animal.Img
        console.log(imgUrl)
        let tarjetaAnimal = `
        <div class="card ejemplar m-2">
        <img id="animal-${i}" class="card-img-top" src="./assets/imgs/${imgUrl}">
        <div id="audioAnimal-${i}" class="card-footer bg-secondary" ></div>
        </div>`
        divAnimales.innerHTML += tarjetaAnimal
        
    })
}

const activarModal = function(animal){
    let $ventanaModal = $("#exampleModal")
    let $cuerpoModal = $(".modal-body")[0]
    $cuerpoModal.innerHTML = 
    `
    <img src="./assets/imgs/${animal.Img}"></div>
    <p><b>${animal.Edad}</p>
    <br>
    <p>Comentarios</p></b>
    <p>${animal.Comentarios}</p>
    `
    $ventanaModal.modal('toggle')
}


export {obtenerDatosAnimales, buscarNombresArchivosAnimal, obtenerSonidoAnimal, dibujarAnimales, activarModal}