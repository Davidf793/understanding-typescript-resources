// can also add in the return value type of the function
function add2(a: number, b: number): number {
    return a + b;
}

// return type can be void (is usally infered however)
function log(message: string): void {
    console.log(message);
}

// return type can be never- means this function will not finish running, stops it at the error, 
// the void means it will finish running the function and then return void
// never can be a property of a constant or variable with a never type (void cannot be property)
function logAndThrow(errorMessage: string): never {
    console.log(errorMessage);
    throw new Error(errorMessage);
}


// Function can be executed as a function with the function type
// put an arrow, define a return type on the right side, define a parameter on the left
//                       vvv -can be any variable, only important it takes one string parameter
function performJob(cb: (msg: string) => void) {
    cb('Job done!');
}

performJob(log);



type User2 = {
    name: string;
    age: number; 
    greet: () => string;
};


let user2: User2 = {
    name: 'Max',
    age: 39,
    greet() {
        console.log('Hello there!');
        return this.name;
    },
    // satifies the greet type definition above
}


user2.greet();


