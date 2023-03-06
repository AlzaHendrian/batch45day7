
// CLASS

class Car {
    constructor(make, model) {
        this.make = make
        this.model = model
    }
    // keyword this berupa variabel yg bisa diakses secara global

    getInfoSClass() {
        return `ini adalah mobil ${this.make} dengan model ${this.model}`
    }
}
// INHERITANCE 
class Car1 extends Car {
    constructor(make, model, battery) {
        super(make, model)
        this.battery = battery
    }

    getInfo() {
        return `${super.getInfoSClass()} dan dengan kapasitas battery sebesar ${this.battery} Volt`
    }
}

// OBJECT

const myCar = new Car('toyota', 'Xpander') // keyword new untuk meng instance dari class Car dan akan mengisikan argument yg akan dilempar ke dalam paramater constructor yg ada didalam class Car.
const myCar1 = new Car1('toyota', 'Xpander', 200)
console.log(myCar.getInfoSClass())
console.log(myCar1.getInfo())





class data1 {
    constructor(params1, params2) {
        this.bebas1 = params1
        this.bebas2 = params2
    }

    infoMasseh() {
        return `nama : ${this.bebas1} ketampanan : ${this.bebas2}`
    }
}

class data2 extends data1 {
    constructor(params1, params2, params3) {
        super(params1, params2)
        this.bebas3 = params3
    }

    getInfo() {
        return `${super.infoMasseh()} status: ${this.bebas3}`
    }
}

const superClass = new data1('alza', 'sangat tampan')
const subClass = new data2('alza', 'sangat tampan', 'duda anak 5')

console.log(superClass.infoMasseh())
console.log(subClass.getInfo())


// Polymorphism
class coba1 {
    getInfo() {
        return 'ini percobaan1'
    }
}
class coba2 extends coba1 {
    getInfo() {
        return 'ini percobaan2'
    }
}
class coba3 extends coba1 {
    getInfo() {
        return 'ini percobaan3'
    }
}

// ini meggunakan konsep polymorphism dimana menggunakan 3 class berbeda dengan class coba1 menjadi parent induk, tetapi memiliki nama fungsi yg sama didalam 3 class berbeda dan didalam fungsi yg sama memiliki hasil return yg berbeda di setiap class nya.

let myCoba = new coba2
console.log(myCoba.getInfo())