// for (var i = 0; i<10; i++){
//     console.log (i)
// }
// for (var i=9; i>=0; i--){
//     console.log(i)
// }
// var fruit = ["banana", "orange", "apple", "kiwi"]
// for (var i=0; i<fruit.length; i++){
//     console.log(fruit[i])
// }

    var num= []
    for (var i=0; i<10; i++){
        num.push(i);
    }
    console.log(num);

// for(var i=0; i<100; i++) {
//     if (i % 2 ==0){ 
//         console.log (i)
//     }
// }
// var fruits = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
// for (var i = 0; i<fruits.length; i++){
//     console.log(fruits[i+=1])
// }

// var people = ["Bob", "json", "skilla", "carter"]
// for (i=0; i<people.length; i++){
//     console.log(people[i])
// }

//write a loop that will print out all the names of the people of the people arary
// Write a loop that pushes the names into a names array, and the occupations into an occupations array.
//  a loop that pushes every other name to an array starting with "Harrison Ford", and every other occupation to another array starting with "Singer".// Write

var peopleArray = [  
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]

  
for (var i=0; i<peopleArray.length; i++){
    console.log(peopleArray[i].name);
}

var names = []
for(var i=0; i<peopleArray.length; i++){
  names.push(peopleArray[i].name);
  
}
console.log(names)

var occupations =[]
for (var i=0; i<peopleArray.length; i++){
  occupations.push(peopleArray[i].occupation);
}
console.log(occupations)

var names1 = []
for(var i=0; i<peopleArray.length; i++){
  names1.push(peopleArray[i+=1].name);
  
}
console.log(names1)

var occupations1 =[]
for (var i=0; i<peopleArray.length; i++){
  occupations1.push(peopleArray[i+=1].occupation);
}
  console.log(occupations1)