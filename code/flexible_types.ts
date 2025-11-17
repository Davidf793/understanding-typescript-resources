let age1 = 36; 

// age1 = '37';
// ^^ should fail because you can't assign string to a number, so..

let age2: any = 36;

age2 = '35';
age2 = false;
age2 = {};
age2 = [];

// however, defeats idea of typescript because you allow literally anything as a value, 
// like Javascript, so..
// using the union symbol | allows specific types
let age3: string | number = 36;

age3 = '34';
age3 = 33;

