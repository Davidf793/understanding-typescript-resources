class User1 {
//    name: string;
//    age: number;
    public hobbies: string[] = [];  // add type assignment : string[] to show that this is what the empty array would hold
    readonly nonew: string[] = [];

    constructor(public name: string, private age: number) {}   // "public"- creates a property in this class that has the same name as this parameter (public by default)
    // private can only be accessed from inside the class, such as method inside the class
    greet() {
        console.log('Me age: ' + this.age);
    }
}  // will be executed automatically when User is called

    const maeve = new User1('Maeve', 36);
    const fred = new User1('Fred', 29);

    maeve.name = 'Maeve';  // can't access the private property 'age' outside the class

    // maeve.nonew = ['Sports']; <-- doesn't work because you are trying to assign 'Sports' to a read-only property
    maeve.nonew.push('Sports'); // This works because it technically doesn't assign a new property but mutates the memory

    console.log(maeve, fred)



