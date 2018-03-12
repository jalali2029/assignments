var rs = require("readline-sync")

var num1 = rs.question("Enter a Number: ")
num1 = Number(num1)
var num2 = rs.question("Enter another Number: ")
num2 = Number(num2)
var operation = ["Add", "Subtract", "Multiply", "Devide"]
var index = rs.keyInSelect(operation, "Choose the Opration")

var Result = 0;

switch(index) {
    case 0:
        Result = add(num1,num2);
        break;
    case 1:
        Result = subtract(num1,num2);
        break;
    case 2:
        Result = multiply(num1,num2);
        break;
    case 3: 
        Result = divide(num1,num2);
        break;
    default:
        console.log("Operation Canceled by User");
}


function add(num1, num2) {
    return num1 + num2;
}

function sub(num1, num2) {
    return num1 - num2;
}

function mul(num1, num2) {
    return num1 * num2;
}

function div(num1, num2) {
    return num1 / num2;
}
console.log("The result is " + Result);