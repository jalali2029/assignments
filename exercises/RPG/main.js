var rs =require(readlin-sync);
Console.console.log("Welcome to the Game");
var PlayerName=rs.question ("What is your Name?")
playerName=rs.question ("press W to walk")

var player={
    name: playerName,
    hitpoint: 100,
    attack: undefined,
    enemiesKilled = 0
}

var Enemy =function(){
    this.attack=Math.floor(Math.random()*20)+10
    this.hp= 50;
}


while(player.hp>0 && player.enemiesKilled <3){

}
// if()