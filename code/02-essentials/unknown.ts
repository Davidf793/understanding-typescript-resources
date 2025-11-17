// unknown forces you to perform if and checks on your code so you don't get runtime errors
// if you use : any, then it's like vanilla Javascript, but will get runtime errors if you get 
// things like undefined
function process(val: unknown) {
  if (
    typeof val === 'object' &&
    !!val &&
    'log' in val &&
    typeof val.log === 'function'
  ) {
    val.log();
  }
}
