var rs = require("readline-sync");
var name = rs.question ("what is your Name? ");
console.log ("Welcome "+ name);
var key=false;
while(true){
    var option = rs.question('lets play! you will have 3 option to do on this game \n choose your option:\n [1] put hand in the hole \n [2] find the key \n [3] open the door \n');
    
    switch (option){
    case "1":
    console.log("You are Dead!")
    return;
    case "2":
    console.log("you found the key");
    key=true;
    break
    case "3":
    if(key===true){
        console.log("congratulations you win and escaped the room!");
        return;
    }else{
        console.log("find the Key first")
    }
console.log("the door is locked")
}
}
