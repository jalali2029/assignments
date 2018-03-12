function largest(arr) {
    var large = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > large) {
            large = arr[i]
        }
    }
    return large;
}
var number = [4, 65, 7, 8, 3, 45, 32];
console.log("The largest Number is " + (largest(number)))

// function lettersWithStrings(arr, char) {
//     var resultArr = [];

//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i].indexOf(char) != -1) {
//             resultArr.push((arr[i]));
//         }
//     }
//     return resultArr;
// }

// testStrArr = ["#3", "$$$", "C%3!", "Hey!$"];
// char = "$";
// // console.log(`\nTesting lettersWithStrings`);
// // console.log(`Find ${char} in ${testStrArr}`);
// console.log(lettersWithStrings(testStrArr, char));

function isDivisible(num1, num2) {
    var num1 = Number(num1)
    var num2 = Number(num2)
    if (num1 % num2 === 0) {
        return true
    } else {
        return false
    }
}
console.log(isDivisible(6, 5))
function divide(num1,num2){
   return Number(num1)%Number(num2)===0
}
console.log(divide(8, 5))