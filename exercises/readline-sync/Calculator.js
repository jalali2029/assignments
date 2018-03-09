var rs = require ("readline-sync")
//choose a number
var num1=rs.question ("Pick an integer");
//another number
var num2=rs.question ("Pick an integer");
//choose operation
var operations = ["+", "-", "*", "/"];
var index= rs.keyInSelect(operations, "Choose the operation you wish to perform");
//chooser funciton
function add (num1,num2){
    return operation(num1,num2);
}
add()
console.log(add())
// function add (x,y);{
// return x+y;
// }