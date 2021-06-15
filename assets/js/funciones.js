//consulta asincrona a la api
const obtenerDatosAnimales = async () =>{
    let response = await fetch("../../animales.json")
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

const dibujarAnimal = (animal, lienzo) => {
    let imgUrl = animal.Img
    console.log(imgUrl)
    let tarjetaAnimal = `
    <div class="card ejemplar">
    <img class="card-img-top" src="./assets/imgs/${imgUrl}">

    <div class="card-footer bg-secondary"></div>
    </div>`
    lienzo.innerHTML += tarjetaAnimal
}
// (async () =>{
//     let r = await buscarNombresArchivosAnimal("Serpiente")
//     console.log(r)
// })()


export {obtenerDatosAnimales, buscarNombresArchivosAnimal, obtenerSonidoAnimal, dibujarAnimal}