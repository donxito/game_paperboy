class Mailbox {
    constructor(player) {
        this.player = player;
        this.width = 8;
        this.height = 6;
        this.positionX = 100;
        this.positionY = 0;
        this.mailbox = null;
        this.createMailbox();
    }

    createMailbox() {
        // create the element
        this.mailbox = document.createElement("div");
    
        // add/modify content
        this.mailbox.setAttribute("class", "mailbox");
    
        this.mailbox.style.width = `${this.width}vw`; // width size
        this.mailbox.style.height = `${this.height}vh`; // height size
    
        // create and append an image element
        const mailboxImage = document.createElement("img");
        mailboxImage.src = "./img/mailbox.png";
        mailboxImage.style.width = "100%";
        mailboxImage.style.height = "100%";
        this.mailbox.appendChild(mailboxImage);
    
        // append to the DOM parent
        const mailboxElement = document.getElementById("game-road");
        mailboxElement.appendChild(this.mailbox);
    
        // set fixed position on x and y axes
        const fixedXPosition = 0; 
        const fixedYPosition = 0; 
    
        this.mailbox.style.left = `${fixedXPosition}vw`;
        this.mailbox.style.bottom = `${fixedYPosition}vh`;
    
        this.moveMailbox();
    }
    

    moveMailbox() {
        const speed = 5; // speed
        this.positionX -= speed;
        this.mailbox.style.left = `${this.positionX}vw`;
    
        // removing mailbox from DOM and array
        if (this.positionX + this.width < 0) {
            this.removeMailbox();
            mailboxes.splice(mailboxes.indexOf(this), 1); // delete from mailboxes array
        }
    }
    

    checkCollision() {
        // check for collision with the player
        // get the dimensions of the player and the obstacle
        const playerDomRect = this.player.player.getBoundingClientRect();
        const mailboxDomRect = this.mailbox.getBoundingClientRect();

        // formula to check collision
        if (
            playerDomRect.bottom >= mailboxDomRect.top &&
            playerDomRect.top <= mailboxDomRect.bottom &&
            playerDomRect.right >= mailboxDomRect.left &&
            playerDomRect.left <= mailboxDomRect.right
        ) {
          
           // Handle collision
           console.log("Collision detected!");
           game.player.collide();
          
        }
    }

    removeMailbox() {
        if (this.mailbox) {
            this.mailbox.remove();
            this.mailbox = null;
        }
    }
}

const mailboxes = []; // array of mailboxes

// generate new mailboxes
setInterval(() => {
    const newMailbox = new Mailbox(game.player);
    mailboxes.push(newMailbox);
}, 6000);

// move mailboxes
setInterval(() => {
    mailboxes.forEach((mailbox) => {
        mailbox.moveMailbox();
        mailbox.checkCollision();
    });
}, 200);

