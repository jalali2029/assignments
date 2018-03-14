//write a constructor function whih makes an object with 3 properties: type, hitPoints, and defense 

var Enemy = function ( defense) {
    this.type = getRandomType();
    this.hitPoints = this.genHitPoints();
    this.defense = this.hitPoints*3;
}
var getRandomType = function () {
    var enemyTypes = ["Ancient Dragon", "Prowler", "Mighty Grunt"];
var randIndex=Math.floor(Math.random()*enemyTypes.length) //selecting random type of enemy
return enemyTypes [randIndex];
}

Enemy.prototype.genHitpoints=function(){
    console.log(this)
    switch(this.type){
        case "Ancient Dragon":
        return Math.floor(Math.random()* 21)+80;//max-min+min
        case "Prowler":
        return Math.floor(Math.random()*30)+50;
        case "MightyGrunt":
        return Math.floor(Math.random()*30)+20;
    }
}
function printEnemies(){
    for (var i=0; i<100; i++){
        console.log(new Enemy())

    }
}

printEnemies()