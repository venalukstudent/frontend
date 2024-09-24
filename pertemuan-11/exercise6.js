// 1
let calculateAge = (birthYear) => {
  return 2019 - birthYear;
};

function yearUntilRetirement(object) {
  let age = calculateAge(object.year);
  let retirement = 60 - age;

  if (retirement > 0) {
    console.log(`${object.firstname} retires in ${retirement}, years`);
  } else {
    console.log(`${object.firstName}, is already retired`);
  }
}

//2.
const addNumber = (a, b, c, d, e, f, g) => {
  let numbers = [a, b, c, d, e, f, g];
  let sum = 0;
  //Change to map function
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
};

//3.
const phi = 3.14;
let power = 2;
let radius = 0;

const calculateArea = (obj) => phi * Math.pow(obj.radius, obj.power);

radius = 21;
let area21 = calculateArea({ radius: radius, power: 2 });
radius = 7;
let area7 = calculateArea({ radius: radius, power: 2 });

console.log(`area with 21 radius ${area21}, and area with 7 radius ${area7}`);

// 4.
const makeAjaxRequest = (url = "www.google.com", method = "GET") => {
  console.log(url, method);
};
