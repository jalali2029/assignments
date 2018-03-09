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

// function usersinput (){
//     if (message.length>=20){
//         return message;
//     }else {
//         console.log("Please enter more than 20 characters!")
//         var message= readlineSync.question ("type your message here ")
//     }
// } 

// var myAge =  readlineSync.question("what is your name?");

// console.log("Welcom, " + myAge.toUpperCase() + "!")

// var isAdmin=readlineSync.keyInYN("Are you the Admin")
// if (isAdmin){
//     readlineSync.question("what is the Password")
// }else {
//     console.log("Welcome!")
//     var options =["home", "tools","help"];
//     var index=readlineSync.keyInSelect(options, "What would you like to do Next");
//     console.log("you are now in the " + options [index] + " section")
// }