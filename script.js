let a = "Umidxon"
let b ="Polatxonov"
let c = 15
let d = "Python, JavaScript"
let e = "Back-end developer"
let f = false
let g = false

class Data {
    constructor (name, surname, age, learn, inTheFuture){
    this.name = name;
    this.surname = surname
    this.age = age
    this.learn = learn
    this.inTheFuture = inTheFuture
    }
};

class Other extends Data{
    constructor (isCar, isMarried, name, surname, age, learn, inTheFuture){
        super (isCar, isMarried)
        this.name = name;
        this.surname = surname
        this.age = age
        this.learn = learn
        this.inTheFuture = inTheFuture
        this.isCar = isCar
        this.isMarried = isMarried
    }
}

let other_info = new Other(f, g, a, b, c, d, e)
console.log(other_info)