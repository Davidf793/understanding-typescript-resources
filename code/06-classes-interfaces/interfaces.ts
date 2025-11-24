interface Authenticatable {   // interface only in Typescript, not in java
  // inside of a class, you have values and logic, inside Interfaces, you have neither, just define the shape
  email: string;
  password: string;
  // can give parameters/ shape
  login(): void;
  logout(): void;
}

// Declaration Merging, can add to an interface by calling again- useful if you get a 
// read-only interface from another file, etc.
// type Authenticatable = {
//   role: string;
// }


// interfaces vs types
type SumFn1 = (a: number, b: number) => number; // function type
 
let sum: SumFn1; // making sure sum can only store values of that function type
 
sum = (a, b) => a + b; // assigning a value that adheres to that function type
// Alternatively, you can also define the SumFn type via an interface:

interface SumFn {
  (a: number, b: number): number;
}



interface AuthenticatableAdmin extends Authenticatable {
  role: 'admin' | 'superadmin';
}



// can also use interfaces with classes
// use them like contracts to force a class to have a certain shape
class AuthenticatableUser implements Authenticatable {
  constructor(
    public userName: string,  // canhave more than you need (userName not in interface), but
    // must at least have everything defined in the interface
    public email: string,
    public password: string
  ) {}

  login() {
    // ...
  }

  logout() {
    // ...
  }
}

// ...

function authenticate(user: Authenticatable) {   // will force anyone using this authenticate function
  // to pass through the Authenticatable inteface
  user.login();
}




// you can use interfaces just like object types
let user: Authenticatable;

user = {
  email: 'test@example.com',
  password: 'abc1',
  login() {
    // reach out to a database, check credentials, create a session
  },
  logout() {
    // clear the session
  },
};
