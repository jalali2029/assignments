var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

console.log("1-Removing the last item from the vegetable array");
var removeLastVegetables = vegetables.pop()
console.log("fruit:", fruit)
console.log("vegetables:", vegetables)
consol.log("")

console.log("2-Removing the first item from the fruit array.");
fruit.shift();
console.log("fruit: ", fruit);
console.log("vegetables: ", vegetables);
console.log("")

console.log("3-Index of Orange")
var indexofOrange = fruit.indexOf('orange')
console.log("fruit:", indexofOrange)
console.log("")

console.log("4-Adding that number to the end of the fruit array");
fruit.push(fruit.indexOf("orange"));
console.log("fruit: ", fruit);
console.log("vegetables: ", vegetables);
console.log("")

console.log("5-Use the length property to find the length of the vegetable array. Log that to the console.");
console.log(vegetables.length);
console.log("fruit: ", fruit);
console.log("vegetables: ", vegetables);
console.log("")


console.log("6-Adding that Number to the end of vegetable array")
vegetables.push(vegetables.length)
console.log("fruit: ", fruit);
console.log("vegetables: ", vegetables);
console.log(" ");

var food = fruit.concat(vegetables);
console.log("7-Put the two arrays together into one array. Fruit first. Call the new Array 'food'.");
console.log("food: ", food);
console.log(" ");

food.splice(4, 2);
console.log("8-Remove 2 elements from your new array starting at index 4 with one method.");
console.log("food: ", food);
console.log(" ");

food.reverse();
console.log("9-Reverse your array.");
console.log("food: ", food);
console.log(" ");

console.log("10-Log your array as a string to the console.");
console.log(food.join());
console.log(" ");