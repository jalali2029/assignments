function countWord(str) {
    var count = str.match(/co.e/gi)
  
    return count
}

console.log(countWord("aaacodebbbcodexxcodecozexxcope"))


var countCode = function (str) {
    var count = 0
    for (var i = 0; i < str.length -3; i++) { //-3 is used to save more loops
        if (str[i] + str[i + 1] + str[i + 3] === "coe") {
            count++
        }
    }
    return count
}
console.log(countCode("cozedsfjcode"))

//read about regex - var regEx=/\w/ 

function countAgain(str){
    var count=0
    var regEx = /co\we/g;
    while (regEx.exec(str)){
        count++
    }
    return count;
}
console.log(countAgain("kshcodedfkcozedf"))
