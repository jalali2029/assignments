for (var i = 0; i<10; i++){
    console.log (i)
}
for (var i=9; i>=0; i--){
    console.log(i)
}
var fruit = ["banana", "orange", "apple", "kiwi"]
for (var i=0; i<fruit.length; i++){
    console.log(fruit[i])
}

    var num= []
    for (var i=0; i<10; i++){
        num.push(i);
    }
    console.log(num);

for(var i=0; i<100; i++) {
    if (i % 2 ==0){ 
        console.log (i)
    }
}
var fruits = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
for (var i = 0; i<fruits.length; i++){
    console.log(fruits[i+=1])
}

var people = ["Bob", "json", "skilla", "carter"]
for (i=0; i<people.length; i++){
    console.log(people[i])
}

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
  names1.push(peopleArray[i].name+[i+=1]);
  
}
console.log(names1)

var occupations1 =[]
for (var i=0; i<peopleArray.length; i++){
  occupations1.push(peopleArray[i+=1].occupation);
}
  console.log(occupations1)

// var grid = []
  
//     for(var i=0; i<3; i++);{
//    grid.push([]);
//    for(var j=0; j<3; j++);{
//      grid[i].push([j])
//     }
//   }
//     console.log(grid)

var grid1Arr = [];
for (var i = 0; i < 3; i++) {
    grid1Arr.push([]);
    for (var j = 0; j < 3; j++) {
        grid1Arr[i][j] = 0;
    }
}
console.log(grid1Arr);

var grid1 = [];
for (var i = 0; i < 3; i++) {
    grid1.push([]);
    for (var j = 0; j < 3; j++) {
        grid1[i][j] = i;
    }
}
console.log(grid1);


var grid2 = [];
for (var i = 0; i < 3; i++) {
    grid2.push([]);
    for (var j = 0; j < 3; j++) {
        grid2[i][j] = j;
    }
}
console.log(grid2);

var grid3 = [[0, 1, 2], 
[0, 1, 2], 
[0, 1, 2]]
for (var i = 0; i < grid3.length; i++) {
    for (var j = 0; j < grid3[i].length; j++) {
        grid3[i][j] = ("x");
    }
}
console.log(grid3);