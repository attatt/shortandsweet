function square(x) {
  return x * x;
}

var result = square(104);

result


//function declaration
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

//function expression
var capitalize = function(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
//////////////////////////////////////////
//isEven function

// function isEven(num) {
//   if(num % 2 === 0) {
//     return "true";
//   }
//   else {
//     return "false";
//   }
// }

// refactor
function isEven(num) {
  return num % 2 === 0;
}

//////////////////////////////////////////
//factorial function

function factorial(num) {
  //define a result variable
  var result = 1
  //calculate factorial and store value in result
  for(var i = 1; i <= num; i++) {
    result *= i;
  }
}
//////////////////////////////////////////
// character replacing function
function kebabToSnake(str) {
  //replace all "-" with "_"
  var newStr = str.replace(/-/g, "_");
  //return str
  return newStr;
}
