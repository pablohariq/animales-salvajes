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
const buscarNombresArchivosAnimal = async (animal) =>{
    let datosAnimales = await obtenerDatosAnimales()
    let indiceCoincidencia = datosAnimales.findIndex(elemento => elemento.name == animal)
    let nombreArchivoImagen = datosAnimales[indiceCoincidencia].imagen //string
    let nombreArchivoSonido = datosAnimales[indiceCoincidencia].sonido
    let nombresArchivosAnimal = {"nombreArchivoImagen": nombreArchivoImagen, "nombreArchivoSonido": nombreArchivoSonido}
    return nombresArchivosAnimal
}

// const agregarAnimal = async (animal) =>{

// }
// (async () =>{
//     let r = await buscarNombresArchivosAnimal("Serpiente")
//     console.log(r)
// })()

export {obtenerDatosAnimales, buscarNombresArchivosAnimal}