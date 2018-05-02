class Player {
    constructor() {
        this.name = "";
        this.totalCoins = 0;
        this.status = "Small";
        this.star = false;
        this.gameActive = true;
        // this.setName=setName;
        // this.gotHit=gotHit;
        // this.gotPowerUp=gotPowerUp;
        // this.addCoin=addCoin;
        // this.print=print;
    }
    setName(name) {
        this.name = name
    }
    gotHit() {
        switch (this.status) {
            case "PoweredUp":
                this.status = "Big";
                break;
            case "Big":
                this.status = "Small";
                break;
            case "Small":
                this.status = "dead";
                break;
            case "dead":
                this.gameActive = false
        }
    }
    gotPowerUp() {
        switch (this.gotPowerUp) {
            case "small":
                this.status = "big";
                break;
            case "big":
                this.status = "PoweredUp"
                break;
            case "PoweredUp":
                this.star = true;
        }

    }
    print() {
        console.log()
    }
    addCoin() {

    }
}

//write a function that returns either 0, 1, 2 at random
// call the appropriate method depending on the number

// repeat the above process 3 times and call mario.print()

const mario = new Player();
mario.setName("Mario");
console.log(mario);