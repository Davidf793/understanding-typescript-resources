// getters and setters

class User2 {    
    constructor(private firstName: string, private lastName: string) {}
    // create getter vvvv *must return a value, treated & used like a property but calculated on the fly when called
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }
}


const Jack = new User2('Mark', 'Auby');
console.log(Jack.fullName)


// whenever values are set, we want to check the input values before we actually store them in a property
class User3 {
    protected firstName2: string = '';  // acts like private, access from outside the class isn't possible, but can be accessed in extended classes
    private lastName2: string = '';

    // setter- set a value so that value must be accepted as a parameter
    set firstNameSet(name: string) {
        if (name.trim() === '') {
            throw new Error('Invalid name.');  // extra validation step run by the setter before the recieved value is actually stored
        }
        this.firstName2 = name;
    }

    set lastNameSet(name: string) {
        if (name.trim() === '') {
            throw new Error('Invalid name.');  // extra validation step run by the setter before the recieved value is actually stored
        }
        this.lastName2 = name;
    }

    get fullName2() {
        return this.firstName2 + ' ' + this.lastName2;
    }

    // static properties
    static eid = 'USER'; // you can access it on the class itself

    static greet() {
        console.log('Hello!'); // doesn't need the first/ last name
    }

}

console.log(User3.eid); // no 'new' keyword, just accessing the class itself
User.greet();

const James = new User3();  // 'new' keyword used to create a new instance based on that class
James.firstNameSet = 'James';
James.lastNameSet = '';
console.log(James.fullName2)


// employee class- builds upon User3
class Employee3 extends User3 {
    constructor(public jobTitle: string) {    // needs the 'super' when you extend a class
        super();
        // can use super to access a base class object
        // super.firstNameSet = 'John';
    }
    work() {
        // ...
        console.log(this.firstName2); // firstName2 is changed to protected instead of private, can be access in extended class
    }
}


// abstract classes
abstract class UIelement {
    constructor(public identifier: string) {}

    clond(targetLocation: string) {
        // logic to duplicate the UI element
    }
}

// let uiElement = new UIelement(); cannot create an instance of an abstract class, so..
class SideDrawerElement2 extends UIelement {
    constructor(public identifier: string, public position: 'left' | 'right') {
        super(identifier);
    }
}