// exercise8.js

//1
export let calculateAge = (birthYear) => {
  return new Date().getFullYear() - birthYear;
};

//
export function yearUntilRetirement(object) {
  let age = calculateAge(object.year);
  let retirement = 60 - age;
  return retirement;
}

//2

export const addNumber = (a, b, c, d, e, f, g) => {
  let numbers = [a, b, c, d, e, f, g];

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
};

//3
const phi = 3.14;

export const calculateArea = (obj) => phi * Math.pow(obj.radius, obj.power);

//4
export const makeAjaxRequest = (url = "www.google.com", method = "GET") => {
  console.log(`URL: ${url}, Method: ${method}`);
};
