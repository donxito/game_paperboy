class Player {
    constructor() {
        this.positionX = 0; // horizontal position
        this.positionY = 25; // vertical position
        
        this.width = 10; // width size
        this.height = 12; // height size

        this.speed = 10;  

        this.score = 0;
        this.health = 15;

        this.player = null;

        this.newspapers = [];

        this.createPlayer();
    }

    createPlayer() {
        // create the element
        this.player = document.createElement("div");

        // add/modify content
        this.player.setAttribute("id", "player");

        this.player.style.width = `${this.width}vw`; // width size
        this.player.style.height = `${this.height}vh`; // height size
        this.player.style.top = `${this.positionY}vh`; // move up, down
        this.player.style.left = `${this.positionX}vw`; // move left, right

        // create and append an image element
        const playerImage = document.createElement("img");
        playerImage.src = "./img/bike.png";
        playerImage.style.width = "100%";
        playerImage.style.height = "100%";
        this.player.appendChild(playerImage)

        // append to the DOM parent
        const playerElement = document.getElementById("game-container");
        playerElement.appendChild(this.player);
    }

    updatePlayerPosition() {
        this.player.style.top = `${this.positionY}vh`;
        this.player.style.left = `${this.positionX}vw`;

        this.checkBoundaries(); 
    }

    moveUp() {
        this.positionY -= this.speed;
        this.updatePlayerPosition();
    }

    moveDown() {
        this.positionY += this.speed;
        this.updatePlayerPosition();
    }

    moveForward() {
        this.positionX += this.speed;
        this.updatePlayerPosition();
    }

    moveBackward() {
        this.positionX -= this.speed;
        this.updatePlayerPosition();
    }

    checkBoundaries() {
        // vertical
        if (this.positionY < 0) {
            this.positionY = 8;
        } 
        else if (this.positionY > 40) {
            this.positionY = 35;
        }

        // horizontal
        if (this.positionX < 0) {
            this.positionX = 5;
        }
        else if (this.positionX + this.width > 100) {
            this.positionX = 100 - this.width;
        }
    }

    collide() {
        this.health--;
        
        const healthContainer = document.getElementById("bar");
        const initialHealth = 20;
        healthContainer.style.width = `${(this.health / initialHealth) * 100}%`;

        const crash = new Audio("sound/Hit_3.wav");
           crash.play();
    
        if (this.health === 0) {
            alert(`Game Over! You scored ${this.score}`);
            location.reload();
         
        }
    }
    

    scoring() {
        this.score++;

        const scoreContainer = document.getElementById("score-display");

        if (scoreContainer) {
            scoreContainer.innerHTML = `Score: ${this.score}`;
            
            const coin = new Audio("sound/Coin_5.wav");
            coin.play();

            console.log("Scored!")
        }
    } 
}


function handleKeyPress(event) {
    switch (event.key) {
        case "ArrowUp":
            game.player.moveUp();
            break;
        case "ArrowDown":
            game.player.moveDown();
            break;
        case "ArrowRight":
            game.player.moveForward();
            break;
        case "ArrowLeft":
            game.player.moveBackward();
            break;
        default:
            break;
    }
}