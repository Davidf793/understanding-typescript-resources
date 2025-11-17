// enum only allows certain choices
enum Role {Admin, Editor, Guest,}
// each option is represented by options, Admin = 0, Editor = 1, Guest = 3
// you can override these however:
// enum Role {Admin = 1, Editor, Guest}, starts counting at 1
// or as string: enum Role {Admin = 'Admin', Editor = 'Editor'}

let userRole: Role = Role.Admin; // 0 => Admin, 1 => Guest


userRole = Role.Guest;


// also define very specific values as types

let userRole1: 'admin' = 'admin'; 
//              ^^^^^ not a value but a type, if I put = 'guest', I would get an error

//But can also..
let userRole2: 'admin' | 'editor' | 'guest' = 'admin';
userRole2 = 'guest'


//using literal types in arrays
let possibleResults1: [1 | -1, 1 | -1]; 
    // has to be these two numbers

possibleResults1 = [1, -1];


//creating function here that has the same as userRole,
//so instead of copy pasting, creating custom types/ type aliases
//use when dealing with long, complex types that you reference in other places of your code
type MyNumber = number;
type User = {
    name: string;
    age: number;
    role: Role;
    permissions: string[];
}
type Role1 = 'admin' | 'editor' | 'guest';
function access(role: Role) {

}















