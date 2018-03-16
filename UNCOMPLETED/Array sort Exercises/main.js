// 1) Sort an array from smallest number to largest
var leastToGreatest = [1, 2, 3, 5, 20, 90];
leastToGreatest.sort(function (a, b) {
    return a - b;
});
console.log(leastToGreatest)

// 2) Sort an array from largest number to smallest
var leastToGreatest = [1, 2, 3, 5, 20, 90];
leastToGreatest.sort(function (a, b) {
    return a + b;
});
console.log(leastToGreatest)


// Sort an array from shortest string to longest

var lengthSort = ["dog", "wolf", "by", "family", "eaten"];
lengthSort.sort(function (a, b) {
    return a.length - b.length

});
console.log(lengthSort)


// 4) Sort an array alphabetically
var alphabetical = ["dog", "wolf", "by", "family", "eaten"]
alphabetical.sort(function (a, b) {
    if (a < b) return -1
    if (a > b) return 1
    return 0

});
console.log(alphabetical)

// 5) Sort the objects in the array by age
var byAge = [{
        name: "Quiet Samurai",
        age: 22
    },
    {
        name: "Arrogant Ambassador",
        age: 100
    },
    {
        name: "Misunderstood Observer",
        age: 2
    },
    {
        name: "Unlucky Swami",
        age: 77
    }
]

