// Javascript object dan Conditional
// Deklarasi object 

// Object Literal
let john = {
    firstName: "John", //properti & Value
    age: 30,
    isMarried: true,
    grade: [80, 90, 100],
    sayGreetings: function () {
        console.log("Hello my name is " + this.firstName)
    },
    address: {
        street: "Jl. Arnold Mononutu",
        city: "Minahasa Utara",
        province: "Sulawesi Utara",

    }
}
console.log(john)

// Mengakses Properti dalam objek
// 1. Dot Notation (Menggunakan titik)
console.log(john.firstName) //John
console.log(john.age) //30
john.age = 31 //Ubah nilai
console.log(john)
john.job = "teacher"
console.log(john)
// 2. Bracker Notation
console.log(john["isMarried"])
john["nationality"] = "Indonesia" //Tambah properti baru
console.log(john)



//Object Method
john.sayGreetings()

//Object inside object
console.log(john.address.city)

//Delete property object
delete john.grade
console.log(john)



//Javascipt Conditional
// 1. If else

// JIka temperature > 37 tampilkan cuaca panasa
// else tampilkan cuaca dingin

temp = 37
if (temp >= 37){
    console.log("Cuaca hari ini panas")
} else {
    console.log("Cuaca hari ini dingin")
}

// 2. if - else if - else

// jika nilai 100 - 80  grade A
// jika nilai 70 - 80 grade B
// jika nilai 50 - 70 grade C
// jika nilai < 50 grade D

let nilai = 85 
if (nilai >= 80 &&  nilai <= 100){
    console.log("Grade A")
} else if (nilai >= 70 && nilai < 80){
    console.log("Grade B")
} else if (nilai >= 50 && nilai < 70){
    console.log("Grade C")
} else {
    console.log("Grade D")
}

// 3. Switch Case
// 1. Tampilkan januari
// 2. Tampilkan Febuari
// 3. Tampilkan maret
// 12. Tampilkan Desember

let month = 3
switch (month){
    case 1:
        console.log("January")
        break
    case 2:
        console.log("Febuary")
        break
    case 3:
        console.log("Maret")
        break
    default:
        console.log("Not found")
        break
}