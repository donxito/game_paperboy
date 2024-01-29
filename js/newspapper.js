class Newspaper {
    constructor(playerPosition, direction) {
        this.width = 2;
        this.height = 2;
        this.speed = 1;
        this.direction = 20;

        this.newspaper = null;

        this.createNewspaper(playerPosition);
        // this.throwNewspaper();

        // missing newspaper image
    }

    createNewspaper(playerPosition) {
        // create the element
        this.newspaper = document.createElement("div");

        // add/modify content
        this.newspaper.setAttribute("class", "newspaper");

        // this.player.style.position = "absolute"
        this.newspaper.style.width = `${this.width}vw`; // width size
        this.newspaper.style.height = `${this.height}vh`; // height size

        this.newspaper.style.top = `${playerPosition.positionY}vh`; // move up, down
        this.newspaper.style.left = `${playerPosition.positionX}vw`; // no parseFloat

        // append to the DOM parent
        const newspaperElement = document.getElementById("player");
        newspaperElement.appendChild(this.newspaper);
    }

    throwNewspaper() {
        // parseFloat function parses a string argument and returns a floating point number.
        const newspaperElement = this.newspaper;
        let positionX = parseFloat(newspaperElement.style.left);
        const speed = this.speed * this.direction;

        let animationInterval; 

        const moveNewspaper = () => {
            positionX += speed;
            newspaperElement.style.left = `${positionX}vw`;

            if (positionX < 100) {
                requestAnimationFrame(moveNewspaper);
            }

            // Check if the newspaper is outside the screen
            if (positionX > 100 || positionX < 0) {
                clearInterval(animationInterval);
                // Remove the newspaper from the DOM
                newspaperElement.remove();
            } ////////////////////////////////////////// TO FIX
        };
        
        animationInterval = setInterval(moveNewspaper, 16);
    }
}

function handleShiftPress(event) {
    if (event.code === "Space") {
        console.log("space was pressed");
        game.newspaper.throwNewspaper();
    }
}

// Event listener for keydown events
document.addEventListener('keydown', handleShiftPress);
