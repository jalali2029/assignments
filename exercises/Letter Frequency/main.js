


function getFrequency(text) {
    var freq = {};
    for (var i=0; i<text.length;i++) {
     var character = text.charAt(i);
     if (freq[character]) {
      freq[character]++;
     } else {
      freq[character] = 1;
     }
    }
   
    return freq;
   };
   var phrase="slimy smelly solution";
   console.log(getFrequency(phrase))


   
function removedup (str){
    var duplicate=""
    for (var i=0; i<str.length; i++){
        if (duplicate.indexOf(str[i])==-1){
            duplicate+= str[i]
        }
    }
    return duplicate
}
console.log(removedup(phrase))