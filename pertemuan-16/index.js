// Asynchronus
// Synchronus

// Synchronus -> single thread
// console.log("Proses 1");
// console.log("Proses 2");
// console.log("Proses 3"); // proses yang memamakan waktu yang lama
// console.log("Proses 4");

// Asynchronus -> multi thread -> non blocking
//1. Pararel
// setTimeout(() => {
//   console.log("Proses 1");
// }, 5000);
// console.log("Proses 2");
// setTimeout(() => {
//   console.log("proses 3");
// }, 3000);
// console.log("Proses 4");

//2. Concurrent
// setTimeout(() => {
//   console.log("Proses 1");
//   setTimeout(() => {
//     console.log("Proses 2");
//     setTimeout(() => {
//       console.log("Proses 3");
//     }, 3000);
//   }, 3000);
// }, 3000);

// //Promise
// //Buat promise sederhana
// let condition = true;
// const newPromise = new Promise ((resolve, reject) => {
//     if (condition) {
//         resolve("Berhasil");
//     } else {
//         reject("Gagal");
//     }
// });

// //Pakai Promise
// //1. then - catch
// newPromise
//     .then((result) => result)
//     .then((result2) => console.log(result2))
//     .catch((error) => console.log(error));

// //2.Async - await
// //Harus dibuat dalam fungsi

// const consumePromise = async () => {
//     let result = await newPromise;
//     console.log(result);
// };
// consumePromise;

//Pakai Promise yang sudah ada di JS (json)
//1. Fetch
// fetch("https://jsonplaceholder.typicode.com/users/1")
//   .then((response) => response.json())
//   .then((json) => console.log(json));
// let response = await fetch("https://jsonplaceholder.typicode.com/users/1");

// (async () => {
//   let response = await fetch("https://jsonplaceholder.typicode.com/users");
//   let json = await response.json();
//   json.forEach(({ name }) => console.log(name));
// })();

//2. Axios
axios
  .get("https://jsonplaceholder.typicode.com/users")
  .then((result) => console.log(result.data));

(async () => {
  let result = await axios.get("https://jsonplaceholder.typicode.com/users");
  result.data.forEach(({ name }) => {
    console.log(name);
  });
})();
