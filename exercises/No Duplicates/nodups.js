
function removedup (str){
    var duplicate=""
    for (var i=0; i<str.length; i++){
        if (duplicate.indexOf(str[i])==-1){
            duplicate+= str[i]
        }
    }
    return duplicate
}

var input="bookkeeper larry"
console.log(removedup(input))