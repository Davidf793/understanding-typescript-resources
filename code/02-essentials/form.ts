// hover of inputEl- expects either HTMLInputElement or null
const inputEl = document.getElementById('user-name') as HTMLInputElement | null;
//                                                      ^^^ overwriting the type that's 
// infered by TypeScript, expecting it to always be one of these types, for example, 
// if it returns some other HTML element that's not HTMLInputElement,
// TypeScript will return it, but you will get runtime errors


// you have to deal with the possibly that it can be null, can replace the null with something
// else, etc.

// if (!inputEl) {
//   throw new Error('Element not found!');
// }


// the ! tells TypeScript that ignores null and silences the error
// TypeScript will ignore it, but if it IS null, you will get a runtime error
// only use if you are sure that the variable is definitelty not null
const inputEl2 = document.getElementById('user-name')!;


// inline check to use ?
// if the inline property is null, it will not try and access the value property,
// if it is not null, it will access it
console.log(inputEl?.value);