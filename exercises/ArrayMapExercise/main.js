var numbers = [1, 4, 9];
var doubles = numbers.map(function (num) {
  return num * 2;
});
console.log(doubles)

function doubleNumbers(numbers) {
  var doubles = numbers.map(function (num) {
    return num * 2;
  })
  return doubles
};
var dblthesenumber = [2, 5, 100]

console.log(doubleNumbers(dblthesenumber))



var arr = [2, 5, 100];
var strArr = arr.map(function (str) {
  return str.toString()
});
console.log(strArr);



function camelCase(str) {
  var firstletter = /\-([a-z])/g;
  if (str === str.toUpperCase()) str = str.toLowerCase();
  return str.replace(firstletter, function (a, b) {
    return b.toUpperCase();
  });
}

// var capitalNames = (["john", "JACOB", "jinGleHeimer", "schmidt"]); // ["John", "Jacob", "Jingleheimer", "Schmidt"]



var namesOnly=([{
    name: "Angelina Jolie",
    age: 80
  },
  {
    name: "Eric Jones",
    age: 2
  },
  {
    name: "Paris Hilton",
    age: 5
  },
  {
    name: "Kayne West",
    age: 16
  },
  {
    name: "Bob Ziroll",
    age: 100
  }
])
