var num1 =5
if (num1 > 3){
    console.log (num1+ " " + "is Greater than 3")
}

var pet = "cat";
if (pet.length === 3) {
    console.log ("length is 3")
}
var animal1 = "dog";
var animal2 = "cat";

if (animal1 === animal2) {
    console.log (animal1+ " is equal to " + animal2)
} else {
    console.log ("not the Same")
}
var person = {
    name: "Bob",
    age: 15,
}
if (person.age >= 15){
    console.log(person.name + " is allowed to go to the Movies")

    }
    if (person.name [0] === "B"){
        console.log (person.name + " is allowed to go to Movies")
} 
if (person.name [0] = "B" && person.age > 18){
    console.log (person.name + " is allowed to go to Movies")

}else {
    console.log("Bob is not allowed to go to the Movies")
} 
var num2 = 1;
if (num2 === "1"){
    console.log("Strict")
} else if (num2 == "1"){
    console.log ("Loose")
} else {
    console.log ("not equal at all")
}
var num3 = "1";
if (num3 <=2 && 2 == 4 || 3*4 > 10 && 5+10 >10){
    console.log ("Yes")
}
typeof 'dog'
if (typeof 'dog'==='string'){
    console.log("dog is a string")
} else {
    console.log("dog is not a string")
}
typeof true 
if (typeof true=='boolean'){
    console.log("true is a boolean")
} else {
    console.log("true is not boolean")
}
typeof undefined 
if (typeof camp=='undefined'){
console.log("Variable camp is undefined")
} else {
    console.log("variable camp is defind")
}

if("a">"A"){
    console.log("small letter a is greater than capital letter A")
}
if (20<"b"){
    console.log("true")
}

var myNum = 1;
if (myNum%2 == 0){
		console.log("even");
}else{
		console.log("odd");
}


