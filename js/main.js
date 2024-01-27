


console.log("helo there")

class Game {
    constructor() {
        this.start
        this.player = new this.player();
        this.obstacles = [];
        this.gameIsOver = false;
        this.maxWidth = 100;
        
    }

}


class Player {
    constructor() {
        this.positionX = 0;    // horizontal position
        this.positionY = 50           // vertical position
        this.directionX = 0;        // horizontal direction  
        this.directionY = 0;        // vertical direction 
        this.width = 5;             // widh size
        this.height = 5;            // height size

        this.speed = 0
        this.score = 0;
        this.lives = 3;

        this.player = null;


        this.createPlayer()

        // missing to add image of a bike to player element
        // missing to add the road game

    }

    createPlayer(){
        // create the element
        this.player = document.createElement("div");

        // add/ modify content
        this.player.setAttribute("id", "player");
        // this.player.style.position = "absolute"
        this.player.style.width = `${this.width}vw`;        // widh size
        this.player.style.height = `${this.height}vh`;      // height size
        this.player.style.bottom = `${this.positionY}vh`;      // move up, down
        this.player.style.left = `${this.positionX}vw`;     // move left, right

        // append to the DOM parent 
        const playerElement = document.getElementById("game-container");
        playerElement.appendChild(this.player);
    }


    moveUpDown() {
        this.positionY += this.directionY
        if (this.positionY < 10){
            this.positionY++;
            this.playerElement.style.bottom = `${this.positionY}vh`

            console.log("moving up ")
        }
    }


   

}



const newPlayer = new Player();

