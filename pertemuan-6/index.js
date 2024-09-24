// Javascript Array
// adalah Variabel yang dapat menyimpan banyak data

// Deklarasi array

// Cara 1. Array literal
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);

// // Cara 2. gunakan kata kunci new
// let numbers2 = new Array(6, 7, 8, 9, 10)
// console.log(numbers2)

// Tipe data yang bisa di simpan dalam array
// let numbers = [1, 2, 3, 4, 5] //numbers/angka
// let students = ["john", "jane", "bob"] //string
// let john = ["john", 30, true, [80, 90,100]] //mixed
// console.log(john)

// // array length
// console.log(numbers, length)
// console.log(students, length)
// console.log(john, length)

// // mengakses elemen atau data tertenu di dalam array
// // akses melalui index
// // index selalu mulai dari 0
// console.log(numbers[2]) //3
// console.log(students[1]) //jane
// console.log(john[3][1])

// // mengakses elemen atau data terkahir
// let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(numbers2[numbers2.length - 1])

// Array method
// let array = [1, 2, 3, "hallo", false, true]
// console.log(array)

// //1. toString()
// console.log(array.toString())

//2.join()
// console.log(array.join())
// console.log(array.join(" "))
// console.log(array.join("-"))
// console.log(array.join(";"))

// //3.pop()
// console.log(array.pop()) // hapus index terakhit

// //4.push
// console.log(array.push()) // tambah di index terakhit

// //5.shift
// console.log(array.shift()) //

// //6.unshift
// console.log(array.unshift()) //

//7. splice
array.splice(4, 1);
console.log(array);

array.splice(3, 0, 4, 5);
console.log(array); //

//8. concat
