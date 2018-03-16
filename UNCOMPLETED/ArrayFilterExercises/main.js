// 1) Given an array of numbers, return a new array that has only the numbers that are 5 or greater.

// function fiveAndGreaterOnly(numbers){
//     return numbers.filter(function(num){ //num reffers to each individual number or item in numbers array
//         if(num>=5){
//             return true
//         }
//     })
// }
// console.log(fiveAndGreaterOnly([5,6,4,3,6]))



// //2) Given an array of numbers, return a new array that only includes the even numbers.
// function fiveAndGreaterOnly(numbers){
//     return numbers.filter(function(num){ 
//         if(num%2==0){
//             return true
//         }
//     })
// }
// console.log(fiveAndGreaterOnly([5,6,4,3,6,2]))


//REDUCE
function reduce(arr, callback, initialval){
    var total= initialval || arr[0]
    for (var i=0; i<arr.length; i++){
        total= callback(total, arr[i]);
    }
    return total
}
function addTogether(total, val){
    return total+val
}
var numbers=[1,2,3,4,5]
console.log(reduce(numbers, addTogether)-1)