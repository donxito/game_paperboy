
class Player {
    constructor() {
        this.positionX = 0; // horizontal position
        this.positionY = 25; // vertical position
       
        this.speed = 3;  // speed
        

        this.width = 5; // width size
        this.height = 5; // height size

        this.score = 0;
        this.health = 10;

        this.player = null;

        this.newspapers = [];
        this.angle =  1;   // angle in degrees  for shooting

        this.createPlayer();

        // Missing to add an image of a bike to the player element
   
    }

    createPlayer() {
        // create the element
        this.player = document.createElement("div");

        // add/modify content
        this.player.setAttribute("id", "player");

        // this.player.style.position = "absolute"
        this.player.style.width = `${this.width}vw`; // width size
        this.player.style.height = `${this.height}vh`; // height size
        this.player.style.top = `${this.positionY}vh`; // move up, down
        this.player.style.left = `${this.positionX}vw`; // move left, right

        // append to the DOM parent
        const playerElement = document.getElementById("game-road");
        playerElement.appendChild(this.player);
    }

    // methods for the player movement
    updatePlayerPosition() {

        // Update the player's position on the screen
        this.player.style.top = `${this.positionY}vh`;
        this.player.style.left = `${this.positionX}vw`;


        // function to keeop the player on the screen
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
            this.positionY = 5;
        } 
        else if (this.positionY > 45) {
            this.positionY = 43;
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
        if(this.health === 0){
            alert(`Game Over! You scored ${this.score}`);
            location.reload(); // reloads the current document.

        }  

    }

    shootNewspaper() {
        const newspaper = new Newspaper({
            positionX: this.positionX + this.width,
            positionY: this.positionY + (this.height / 2),
        },  this.angle);
        this.newspapers.push(newspaper);

        newspaper.throwNewspaper();
    }

  


}

// Function to handle key press events the player movement
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
        case "Space":
            game.player.shootNewspaper();
            break;
        default:
           
            break;
    }

    
}

// Event listener for keydown events
document.addEventListener('keydown', handleKeyPress);