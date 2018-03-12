// function large (arr){
//     var largestNum=[3,6,8,12]
//     var current;
//     for(i=0; i< arr.length; i++){
//         current=0;
//         if(arr[i]>current){
//             current=arr[i];
//         }
//         largestNum.push(current)
//     }
//     return largestNum;

// }

// function largest(arr) {
//     var large = arr[0];
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] > large) {
//             large = arr[i]
//         }
//     }
//     return large;
// }
// var number = [4, 65, 7, 8, 3,45,32];
// console.log("The largest Number is " + (largest(number)))

function lettersWithStrings(arr, char) {
    var resultArr = [];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i].indexOf(char) != -1) {
            resultArr.push((arr[i]));
        }
    }
    return resultArr;
}

testStrArr = ["#3", "$$$", "C%3!", "Hey!$"];
char = "$";
// console.log(`\nTesting lettersWithStrings`);
// console.log(`Find ${char} in ${testStrArr}`);
console.log(lettersWithStrings(testStrArr, char));