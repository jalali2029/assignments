var readlineSync = require("readline-sync");

var myName = readlineSync.question("what is your name?");

console.log("Welcome, " + myName.toUpperCase() + "!")

console.log("You Entered: " + myName.length + " Characters")

var name = myName;
var welcome=("Welcome again Mr/Mrs." );
console.log(welcome.concat(name));

var message= readlineSync.question ("type your message here: ")

while (message.length < 20){
     message = readlineSync.question ("Please Enter more than 20 characters ")
}
var half=message.slice(0,message.length)
var rev=half.reverse();
console.log(rev)

