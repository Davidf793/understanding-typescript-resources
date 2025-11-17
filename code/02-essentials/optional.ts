// the ? after msg indicates that this parameter is optional- you don't have to set it
function generateError(msg?: string) {
  throw new Error(msg);
}

generateError();

type User3 = {
  name: string;
  age: number;
  role?: 'admin' | 'guest'  // role is an optional property
};

let input = '';
const didProvideInput1 = input || false; // the || equals the logical OR operator, checks for falsey values
const didProvideInput = input ?? false;  // the ?? only checks for null or undefined, not falsey
// this would return the empty string since it is not null/ undefined. || will return falses
