// 1. String literals

let fullName = "John Doe";
let age = 30;
let address = "Manado";

// Halo nama saya John Doe, umur saya 30 tahun
// dan saya tinggal di Manado

let kalimat =
  "Halo nama saya " +
  fullName +
  ", umur saya " +
  age +
  " dan saya tinggal di" +
  age;

console.log(kalimat);

let kalimat2 = `Halo nama saya ${fullName}~, umur saya ${age}, dan saya tinggal ${address}`;
console.log(kalimat2);

// 2. Arrow Function

function sayGreetings1(fullName) {
  return `Hello my name is ${fullName}`;
}
console.log(sayGreetings1("John Doe")); // function biasa

const sayGreetings2 = () => {
  return `hello my name is ${fullName}`;
};
console.log(sayGreetings2("John Doe"));

const sayGreetings3 = () => `hello my name is ${fullName}`;
console.log(sayGreetings3("John Doe")); //Bisa di gunakan jika akan menggunakn return

// arrow function pada IIFE
let output1 = (() => "Hello")();

// arrow funtion pada Callback func
let numbers = [1, 2, 3, 4, 5];
let output2 = numbers.map((item) => item);
console.log(output2);

// 3. Default Parameter
const sayGreetings4 = (fullname) => {
  if (!fullName) {
    fullName = "John Doe";
  }
  if (!age) {
    age = 30;
  }
  console.log(
    `Hallo nama saya ${fullName}, umur saya ${age}, dan saya tinggal di ${address}`
  );
};
sayGreetings4();

const sayGreetings5 = (fullName = "John Doe", age = 30, address = "Manado") => {
  console.log(
    `Halo, nama saya ${fullName}, umur saya ${age}, dan saya tinggal di ${address}.`
  );
};
