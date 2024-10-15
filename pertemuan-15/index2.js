import { calculateAge, yearUntilRetirement } from "./exercise8.js";
let object = {
  firstName: "John",
  year: 1960,
};
let retirement = yearUntilRetirement(object);

if (retirement > 0) {
  console.log(`${object.firstName} retires in ${retirement} years`);
} else {
  console.log(`${object.firstName} is already retired`);
}

import { addNumber } from "./exercise8.js";
let result = addNumber(1, 2, 3, 4, 5, 6, 7);
console.log(`The sum is: ${result}`);

import { calculateArea } from "./exercise.js";
let area21 = calculateArea({ radius: 21, power: 2 });

let area7 = calculateArea({ radius: 7, power: 2 });

console.log(`Area with radius 21: ${area21}, and area with radius 7: ${area7}`);

import { makeAjaxRequest } from "./exercise.8.js";
makeAjaxRequest();

makeAjaxRequest("www.example.com", "POST");
