

function isPalindrome(str) {
  //lowercas all letters
  str = str.toLowerCase();
  //remove any symbols
  //remove any spaces
  // str=str.replace(/\w+/g, "") this method works
var alphabet="abcdefghijklmnopqrstuvwxyz"
var normalized = "";
for(var i=0; i<str.length; i++){
  if(alphabet.indexOf(str[i])!== -1){ // or if(alphabet.includes(str[i]))
    normalized+=str[i];
  }
}
  //reverse original string
  var reverseStr="";
  for (var j=normalized.length-1; j>=0; j--){
    reverseStr+= normalized[j]
  }
  //check if reversed string is same as old string
  if(normalized===reverseStr){
    return true
  }else {
    return false
  }
  // if so, True
  // else False
}

console.log(isPalindrome("daddad!"))