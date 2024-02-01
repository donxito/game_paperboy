class Newspaper {
    constructor(player) {
        this.positionX = player.positionX;
        this.positionY = player.positionY;
        this.width = 32;
        this.height = 44;
        this.speed = 6;
        this.direction = 1;
        this.traveledDistance = 0;
        this.newspaper = this.createNewspaper();
    }

    createNewspaper() {
        const newspaperElement = document.createElement("img");
        newspaperElement.src = "./img/newspaper1.png";
        newspaperElement.classList.add('newspaper');


        newspaperElement.style.border = "2px solid #F3F30B"
        
        newspaperElement.style.position = "absolute";
        newspaperElement.style.width = `${this.width}px`;
        newspaperElement.style.height = `${this.height}px`;
        newspaperElement.style.left = `${this.positionX}px`;
        newspaperElement.style.top = `${this.positionY}px`;

        return newspaperElement;
    }

    throwNewspaper() {
        const speed = this.speed * this.direction;
        const maxDistance = 400;

        this.positionY += speed;
        this.newspaper.style.top = `${this.positionY}px`;

        if (this.positionY < 0 || this.positionY > window.innerHeight || this.traveledDistance >= maxDistance) {
            this.removeNewspaper();
        }
        this.traveledDistance += speed;       
       
    }

    removeNewspaper() {
        if (this.newspaper.parentNode) {
            this.newspaper.parentNode.removeChild(this.newspaper);
        }
    }

    render(parentElement) {
        parentElement.appendChild(this.newspaper);
    }

    checkCollision() {
        // check for collision with the mailboxes
        mailboxes.forEach((mailbox) => {
            // get the dimensions of the newspaper and the mailbox
            const newspaperDomRect = this.newspaper.getBoundingClientRect();
            const mailboxDomRect = mailbox.mailbox.getBoundingClientRect();
    
            // formula to check collision
            if (
                newspaperDomRect.bottom >= mailboxDomRect.top &&
                newspaperDomRect.top <= mailboxDomRect.bottom &&
                newspaperDomRect.right >= mailboxDomRect.left &&
                newspaperDomRect.left <= mailboxDomRect.right
            ) {
                // Handle collision
           
                console.log(`You scored! You have ${game.player.score}`);
                game.player.scoring();
                this.removeNewspaper();
            }
        });
    }

}

function handleKeydown(event) {
    if (event.code === "Space") {
        console.log("Space bar was pressed");
        const shoot = new Audio("sound/Shoot_2.wav");
        shoot.play();

        // Remove the previous newspaper (if any)
        if (game.player.newspapers.length > 0) {
            const previousNewspaper = game.player.newspapers.pop();
            previousNewspaper.removeNewspaper();
        }

        // Create and throw a new newspaper
        const newspaper = new Newspaper({
            positionX: game.player.positionX,
            positionY: game.player.positionY,
            width: game.player.width,
            height: game.player.height,
        });

        game.player.newspapers.push(newspaper);

        const gameRoadElement = document.getElementById("player");
        newspaper.render(gameRoadElement);

        const moveNewspaper = () => {
            newspaper.throwNewspaper();
            newspaper.checkCollision(); 
            if (!document.body.contains(newspaper.newspaper)) {
                cancelAnimationFrame(moveNewspaperInterval);
            } else {
                moveNewspaperInterval = requestAnimationFrame(moveNewspaper);
            }
        };

        let moveNewspaperInterval = requestAnimationFrame(moveNewspaper);
    }
}

