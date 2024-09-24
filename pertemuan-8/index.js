// JavaScript Loop
// For - loop

// array object\
let student = [
  {
    id: 1,
    firstName: "John",
    grade: 80,
  },
  {
    id: 2,
    firstName: "Lane",
    grade: 90,
  },
  {
    id: 3,
    firstName: "Venal",
    grade: 100,
  },
];

console.log(student);

for (let i = 0; i < student.length; i++) {
  console.log(student[i]);
}

// // while loop
// let i = 0
// while(i < students.length){
//     console.log(students[i])
//     i++
// }

// Do-while loop
// let i = 0
// do {
//     console.log(student[i])
//     i++
// } while (i < student.length)

// 1.ForEach()
student.forEach(function (item, index) {
  console.log(index);
  console.log(item);
});
//tidak gunakan return

// 2.Map()
// student.map(function (item){
//     console.log(item)
// })

//bisa gunakan return
// let output = student.map(function (item){
//     return item
// })
// console.log(output)

// // 3.Filter()
//     let output=student.filter(function(item){
//         return item.grade >= 90
//     })
//     console.log(output)

// 4.Find()
// let output=student.find(function(item){
//     return item.grade >= 90
// })
// console.log(output)

// // 5.FindIndex()
// let index = student.findIndex(function (item){
//     return item.firstName === "Jane"
// })
// console.log(index)
