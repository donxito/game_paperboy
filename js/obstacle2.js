class Obstacle2 {
    constructor(player) {
        this.player = player
        this.width = 4;
        this.height = 4;

        this.obstacle2 = null;

        this.positionX = 110; // start from the right side
        this.positionY = 0;

        this.createObstacleElement();
      
    }


    createObstacleElement() {
        // create the element
        this.obstacle2 = document.createElement("div");

        // add/modify content
        this.obstacle2.setAttribute("class", "obstacle2");
    
        this.obstacle2.style.width = `${this.width}vw`; // width size
        this.obstacle2.style.height = `${this.height}vh`; // height size

        // create and append an image element
        const obstacleImage = document.createElement("img");
        obstacleImage.src = "./img/Rock_01.png";
        obstacleImage.style.width = "100%";
        obstacleImage.style.height = "100%";
        this.obstacle2.appendChild(obstacleImage)

        // append to the DOM parent
        const obstacleElement = document.getElementById("game-road");
        obstacleElement.appendChild(this.obstacle2);

         // set fixed position on x and y axes
        const fixedXPosition = 0; 
        const fixedYPosition = 2; 
    
        this.obstacle2.style.left = `${fixedXPosition}vw`;
        this.obstacle2.style.bottom = `${fixedYPosition}vh`;
        

        this.moveObstacle();
    }


    moveObstacle() {
        this.positionX -= 5; //speed
        this.obstacle2.style.left = `${this.positionX}vw`;


       // removing obstacle from DOM and array
        if (this.positionX + this.width < 0) {
            this.obstacle2.remove();  // remove the obstacles when out of the screen
            obstacles2.splice(obstacles2.indexOf(this), 1); //  delete from obstacles array
        }    
    }  

    checkCollision() {
       
        //  get the dimensions of the player and the obstacle
        // The Element.getBoundingClientRect() method returns a DOMRect object providing information about the size of an element and its position relative to the viewport.

       const playerDomRect = this.player.getBoundingClientRect();
       const obstacleDomRect = this.obstacle2.getBoundingClientRect();

        // formula to check collision
       if (
           playerDomRect.bottom >= obstacleDomRect.top &&
           playerDomRect.top <= obstacleDomRect.bottom &&
           playerDomRect.right >= obstacleDomRect.left &&
           playerDomRect.left <= obstacleDomRect.right
       ) {
           
           // Handle collision
           console.log("Collision detected!");
           game.player.collide(); 

       }
   }   
   
}


const obstacles2 = []; // array of obstacles

// generate new obstacles
setInterval(() => {
    const newObstacles = new Obstacle2(player);
    obstacles2.push(newObstacles);
}, 3000);

// move obstacles
setInterval(() => {
    obstacles2.forEach((obstacle2) => {
        obstacle2.moveObstacle();
        obstacle2.checkCollision();
    })
}, 400);





