let userName: string;
let userAge = 38;

userName = 'Max';
//userAge = '34';

// assumes 'a' is type number because of explicit assignment and 'b' because of value 5
function add(a: number, b = 5) {
    return a + b;
}

add(10);
// add('10');
add(10, 6);
// add(10, '6');

