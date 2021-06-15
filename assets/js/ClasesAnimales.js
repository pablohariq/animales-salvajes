class Animal{
    constructor(nombre,edad,img,comentarios,sonido){
        let _nombre = nombre
        this._getNombre = () => _nombre

        let _edad = edad
        this._getEdad = () => _edad
        
        let _img = img
        this._getImg = () => _img

        let _comentarios = comentarios 
        this._getComentarios = () => _comentarios
        this._setComentarios = (nuevosComentarios) => _comentarios = nuevosComentarios

        let _sonido = sonido
        this._getSonido = () => _sonido
    }
    get Nombre(){
        return this._getNombre()
    }
    get Edad(){
        return this._getEdad()
    }
    get Img(){
        return this._getImg()
    }
    get Comentarios(){
        return this._getComentarios()
    }
    set Comentarios(nuevoComent){
        return this._setComentarios(nuevoComent)
    }
    get Sonido(){
        return this._getSonido()
    }
}

class Leon extends Animal{
    constructor(nombre,edad,img,comentarios,sonido){
        super(nombre, edad, img, comentarios, sonido)
    }
    Rugir(){
        document.querySelector("#player").setAttribute("src",`./assets/sounds/${this.Sonido}.mp3`) //setAttribute devuelve undefined
        let player = document.querySelector("#player")
        player.play()
    }
}

class Lobo extends Animal{
    constructor(nombre,edad,img,comentarios,sonido){
        super(nombre, edad, img, comentarios, sonido)
    }
    Aullar(){
        document.querySelector("#player").setAttribute("src",`./assets/sounds/${this.Sonido}.mp3`) //setAttribute devuelve undefined
        let player = document.querySelector("#player")
        player.play()    
    }
}

class Oso extends Animal{
    constructor(nombre,edad,img,comentarios,sonido){
        super(nombre, edad, img, comentarios, sonido)
    }
    Gruñir(){
        document.querySelector("#player").setAttribute("src",`./assets/sounds/${this.Sonido}.mp3`) //setAttribute devuelve undefined
        let player = document.querySelector("#player")
        player.play()        }
}

class Serpiente extends Animal{
    constructor(nombre,edad,img,comentarios,sonido){
        super(nombre, edad, img, comentarios, sonido)
    }
    Sisear(){
        document.querySelector("#player").setAttribute("src",`./assets/sounds/${this.Sonido}.mp3`) //setAttribute devuelve undefined
        let player = document.querySelector("#player")
        player.play()        }
}

class Aguila extends Animal{
    constructor(nombre,edad,img,comentarios,sonido){
        super(nombre, edad, img, comentarios, sonido)
    }
    Chillar(){
        document.querySelector("#player").setAttribute("src",`./assets/sounds/${this.Sonido}.mp3`) //setAttribute devuelve undefined
        let player = document.querySelector("#player")
        player.play()    
    }
}

export {Animal, Leon, Lobo, Oso, Serpiente, Aguila}