
//have a new array
//create a loop for people
//create another loop inside people loop
// capitalize alphabets
 
var people = ["jon", "jacob", "jingle", "heimer", "schmidt"];  
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var newArr=[]
for(var i=0; i<people.length; i++){
newArr.push(people[i]+people.slice(1))
for(var j=0; j<alphabet.length; j++){
    newArr.push(alphabet[j].toUpperCase())
}
}

console.log(newArr)

