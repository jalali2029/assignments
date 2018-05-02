//1) Turn an array of numbers into a total of all the numbers
var numbers = [1, 2, 3];

function sum(total, num) {

    return total + num;
}

console.log(numbers.reduce(sum));


//2) Turn an array of numbers into a long string of all those numbers.
var maketItString = [1, 2, 3];

function toString(arr) {
    return arr.join('')
}
console.log(toString(maketItString))

// 3) Turn an array of voter objects into a count of how many people voted
var voters = [{
        name: 'Bob',
        age: 30,
        voted: true
    },
    {
        name: 'Jake',
        age: 32,
        voted: true
    },
    {
        name: 'Kate',
        age: 25,
        voted: false
    },
    {
        name: 'Sam',
        age: 20,
        voted: false
    },
    {
        name: 'Phil',
        age: 21,
        voted: true
    },
    {
        name: 'Ed',
        age: 55,
        voted: true
    },
    {
        name: 'Tami',
        age: 54,
        voted: true
    },
    {
        name: 'Mary',
        age: 31,
        voted: false
    },
    {
        name: 'Becky',
        age: 43,
        voted: false
    },
    {
        name: 'Joey',
        age: 41,
        voted: true
    },
    {
        name: 'Jeff',
        age: 30,
        voted: true
    },
    {
        name: 'Zack',
        age: 19,
        voted: false
    }
];

function numAttrs(obj) {
    var count = 0;
    for (var i = 0; i < obj.length; i++) {
        if (obj[i].voted === true) {
            count++;
        }
    }
    return count;
}
console.log(numAttrs(voters))

//4) Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once

var wishlist = [{
        title: "Tesla Model S",
        price: 90000
    },
    {
        title: "4 carat diamond ring",
        price: 45000
    },
    {
        title: "Fancy hacky Sack",
        price: 5
    },
    {
        title: "Gold fidgit spinner",
        price: 2000
    },
    {
        title: "A second Tesla Model S",
        price: 90000
    }
];

function shoppingSpree(arr) {
    count = 0;
    for (var i = 0; i < arr.length; i++) {
        count += arr[i].price;
    }
    return count;
}
console.log(shoppingSpree(wishlist)) // 227005

// 5) Given an array of arrays, flatten them into a single array


var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

function flatten(arr) {
    return arr.reduce((a, b) =>
        a.concat(b)
    )
}

console.log(flatten(arrays))


// 6) Given an array of potential voters, return an object representing the results of the vote
// Include how many of the potential voters were in the ages 18-25, how many from 26-35, how many 
// from 36-55, and how many of each of those age ranges actually voted. 
//The resulting object containing this data should have 6 properties. See the example output at the bottom.

var voters = [{
        name: 'Bob',
        age: 30,
        voted: true
    },
    {
        name: 'Jake',
        age: 32,
        voted: true
    },
    {
        name: 'Kate',
        age: 25,
        voted: false
    },
    {
        name: 'Sam',
        age: 20,
        voted: false
    },
    {
        name: 'Phil',
        age: 21,
        voted: true
    },
    {
        name: 'Ed',
        age: 55,
        voted: true
    },
    {
        name: 'Tami',
        age: 54,
        voted: true
    },
    {
        name: 'Mary',
        age: 31,
        voted: false
    },
    {
        name: 'Becky',
        age: 43,
        voted: false
    },
    {
        name: 'Joey',
        age: 41,
        voted: true
    },
    {
        name: 'Jeff',
        age: 30,
        voted: true
    },
    {
        name: 'Zack',
        age: 19,
        voted: false
    }
];
var totalVoters={
    youngVotes: 0,
    youth: 0,
    midVotes: 0,
    mids: 0,
    oldVotes: 0,
    olds: 0 
  }

function ageVote(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].age < 26  ){
            totalVoters.youth++;
            if(arr[i].voted===true){
                totalVoters.youngVotes ++;
            }
        }else if(arr[i].age < 36 ){
            totalVoters.mids++;
            if(arr[i].voted===true){
            totalVoters.midVotes++;
            }
        }else {
            totalVoters.olds++;
            if(arr[i].voted===true){
                totalVoters.oldVotes ++;
                }
        }
    }
}
ageVote(voters);
console.log(totalVoters)
 // Returned value shown below:  
/*
{ youngVotes: 1,
  youth: 4,
  midVotes: 3,
  mids: 4,
  oldVotes: 3,
  olds: 4 
}
*/

// && arr[i].voted===true
// && arr[i].voted===true