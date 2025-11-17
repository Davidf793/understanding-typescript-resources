let hobbies = ['Sports', 'Cooking'];

// hobbies.push(10);   <- will give you error, Typescript knows it is an array of strings

let users: string[];

// to make it an array that hold either strings or numbers, you can either use...
// let users2: (string | number) [];
let users2: Array<string| number>;

users2 = [1, 'Max'];
users2 = [5, 1];
users2 = ['Max', 'Min'];


// Want to be clear of the structure of your arrays 
// (not just all numbers but a certain amount of numbers) -> tuple
// instead of: let possibleResults: number[]; // [1, -1]
let possibleResults: [number, number]; 
    // has to be two numbers. Can also do [nunber, string], etc.

possibleResults = [1, -1];
// this one doesn't work: possibleResults = [5, 10, 12];

// create objects
let user = {
    name: 'Jack',
    age: 38
};
// or..
let user1: {
    name: string;
    age: number | string;
    hobbies: string[];
    role: {
        description: string;
        id: number;
    }
} = {
    name: 'Jack',
    age: 38,
    hobbies: ['Sports', 'Cooking'],
    role: {
        description: 'admin',
        id: 5
    }
};

// assign val as empty object, but giving it a string still works.. why?
// not actually an object, used here just means any type, so as long as it is 
// not undefined or null, it will pass
let val: {} = 'some text';

let  data: Record<string, number | string>;
// don't know if there will be a key value, i.e. name, description, role, in your object type
// let data be an object full of empty records
data = {
    entry1: 1,
    entry2: 'some string'
};



