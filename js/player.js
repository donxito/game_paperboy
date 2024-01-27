
class Player {
    constructor() {
        this.positionX = 0; // horizontal position
        this.positionY = 50; // vertical position
       
        this.speed = 3;

        this.width = 5; // width size
        this.height = 5; // height size

        this.score = 0;
        this.lives = 3;

        this.player = null;

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
        const playerElement = document.getElementById("game-container");
        playerElement.appendChild(this.player);
    }

    // methods to the player movement

    updatePlayerPosition() {
        // Update the player's position on the screen
        this.player.style.top = `${this.positionY}vh`;
        this.player.style.left = `${this.positionX}vw`;
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

   
}

// Function to handle key press events the player movement
function handleKeyPress(event) {
    switch (event.key) {
        case 'ArrowUp':
            game.player.moveUp();
            break;
        case 'ArrowDown':
            game.player.moveDown();
            break;
        case 'ArrowRight':
            game.player.moveForward();
            break;
        case 'ArrowLeft':
            game.player.moveBackward();
            break;
        default:
           
            break;
    }
}

// Event listener for keydown events
document.addEventListener('keydown', handleKeyPress);