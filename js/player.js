class Player {
    constructor() {
        this.positionX = 0; // horizontal position
        this.positionY = 25; // vertical position
        
        this.width = 8; // width size
        this.height = 10; // height size

        this.speed = 5;  

        this.score = 0;
        this.health = 10;

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
        if (this.health === 0) {
            alert(`Game Over! You scored ${this.score}`);
            location.reload();
        }
    }

    scoring() {
        this.score++;
      
        console.log("Scored!")
        //document.getElementById('score').innerHTML = `Score: ${this.score}`;
        // CRIAR DIV SCORE
    }

    throwNewspaper() {
        const direction = 1; // Set the direction to the same as the player

        const newspaper = new Newspaper({
            positionX: this.positionX + this.width,
            positionY: this.positionY + (this.height / 2),
            direction: direction, // Pass the direction to the Newspaper constructor
        });

        this.newspapers.push(newspaper);

        // Append the newspaper to the player element
        const playerElement = document.getElementById("player");
        newspaper.createNewspaper(playerElement);

        const moveNewspaperInterval = setInterval(() => {
            newspaper.throwNewspaper();

            if (!document.body.contains(newspaper.newspaper)) {
                clearInterval(moveNewspaperInterval);
            }
        }, 100); // Adjust the interval animation
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