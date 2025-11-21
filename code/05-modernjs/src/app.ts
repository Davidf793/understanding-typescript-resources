//const userName = 'Max';
// // userName = 'Maximilian';   // you get error- const HAS to be this variable
// let age = 30;

// age = 29;



// if (age > 20) {
//   let isOld = true;
// }
// let isOld, variable or constant only available in block where you define it or in a lower block

// console.log(isOld);

// console.log(result);


// function add(a: number, b: number) {
//   let result;
//   result = a + b;
//   return result;
// }

// or...
// const add = (a: number, b: number) => a + b;
// you can omit the curly braces if you are just writing one expression, otherwise you need {} and return
// const add = (a: number, b: number) => {
//    return a + b
//};


// setting default values so you don't have to call both variables
// const add = (a: number, b: number = 1) => a + b;
// printOutput(add(5));


// const printOutput: (a: number | string) => void = output => console.log(output);

// const button = document.querySelector('button');

// if (button) {
//   button.addEventListener('click', event => console.log(event));
// }



const hobbies = ['Sports', 'Cooking'];
// extract all values of an array
// arrays are objects, and objects are reference memories
const activeHobbies = ['Hiking'];

activeHobbies.push(hobbies[0], hobbies[1]);
// but spread operator ... pull out all the elements of the array and add them as a 
// list of values in the place where you used an operator (hobbies)
activeHobbies.push(...hobbies);

const person = {
  firstName: 'Max',
  age: 30
};

const copiedPerson1 = person; //just creates a pointer that references person, doesn't make a copy
const copiedPerson = { ...person };  //key values pairs are pulled out of there



// rest parameters, in the place where you expect a list of values, you can also use the ... dots
// it will merge all incoming parameters into an array
const add = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;   
  }, 0);
};

const addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);



// Array and object destructuring, extract the hobbies and store them as variables/ constants
const hobby11 = hobbies[0] // takes too long to extract all hobbies

// array destructuring, objects are pulled out in order
const [hobby1, hobby2, ...remainingHobbies] = hobbies; // goes through the hobbies array, takes out the first hobby 1, 
// then hobby 2, and then the remaining gets put into a new array called remainingHobbies
console.log(hobbies, hobby1, hobby2);


// object destructuring, elements are not pulled out by order, but by keyname
const { firstName: userName, age } = person; // special syntax, the {} are not for assigning the type
// you have to call the keyname exactly to pull them out (firstName, age...). If you want to change the name you can firstName: userName
console.log(userName, age, person);