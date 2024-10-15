// Rest Parameter and spread operator

// 1. rest Parameter
// Digunakan pada saat kita membuat banyak fungsi yang memiliki banyak parameter

// fungsi tanpa rest parameter
const func1 = (param1, param2, param3, param4, param5) => {
  console.log(param1, param2, param3, param4, param5);
};
func1("A", "B", "C", "D", "E");

// fungsi dengan rest Parameter
const func2 = (...params) => {
  console.log(params);
};
func2("A", "B", "C", "D", "E", "F", "G");

// Rest Parameter harus di terakhir dalam parameter

// mini exercise

const penjumlahan = (...arr) => {
  //params dapat di ganti arr karena rest params bersifat bebas
  let hasil = 0;
  arr.forEach((item) => (hasil += item));
  return hasil;
};
console.log(penjumlahan(1, 2, 3, 4, 5, 6));

//2. Spread operator
// Digunakan pada array dan object, untuk memecah array/object menjadi element kecil pembentukannya

//array
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);
console.log(...numbers);

//a. menduplikasi array
let number2 = [...numbers];
console.log(numbers2);
