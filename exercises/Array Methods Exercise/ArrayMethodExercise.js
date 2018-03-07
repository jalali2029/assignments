var fruit = ["banana", "apple", "orange", "watermelon"];

var vegetables = ["carrot", "tomato", "pepper", "lettuce"];
 var removeLastFruit=fruit.pop()
var removeLastVegetables=vegetables.pop()
console.log("fruit:",fruit)
console.log("vegetables:", vegetables)

var addFirstFruit=fruit.unshift('Peach')
var addFirstVegetables=vegetables.unshift('Potato')
console.log("fruit:",fruit)
console.log("vegetables:", vegetables)

var indexofOrange=fruit.indexOf('orange')
console.log("fruit:",fruit)

var addnumFruit=fruit.push(3)
console.log("fruit:", fruit)

var lengthofvege=vegetables.length
console.log("fruit:", fruit)

var addnumVege=vegetables.push(4)
console.log("vegetables:", vegetables)

var food=fruit.concat(vegetables)
console.log("food:", food)

var removeElements=food.splice(4,2)
// console.log(removeElements)
console.log("food:", food)

var rev=food.reverse()
console.log("rev:", rev)

