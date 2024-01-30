class Obstacle {
    constructor(player) {
        this.player = player
        this.width = 16;
        this.height = 12;

        this.obstacle = null;

        this.positionX = 110; // start from the right side
        this.positionY = 0;

        this.createObstacleElement();

        // missing cars image
    }

    createObstacleElement() {
        // create the element
        this.obstacle = document.createElement("div");

        // add/modify content
        this.obstacle.setAttribute("class", "obstacle");
    
        this.obstacle.style.width = `${this.width}vw`; // width size
        this.obstacle.style.height = `${this.height}vh`; // height size

        // create and append an image element
        const obstacleImage = document.createElement("img");
        obstacleImage.src = "./img/car.png";
        obstacleImage.style.width = "100%";
        obstacleImage.style.height = "100%";
        this.obstacle.appendChild(obstacleImage)

        // append to the DOM parent
        const obstacleElement = document.getElementById("game-road");
        obstacleElement.appendChild(this.obstacle);

        // random value for position on positionY between 0 and maxBottom within game-road height using .offsetHight and Math.random

        // The HTMLElement.offsetHeight read-only property returns the height of an element, including vertical padding and borders, as an integer

        const gameRoadHeight = document.getElementById("game-road").offsetHeight;
        const maxBottom = gameRoadHeight - this.height;
        const randomBottom = Math.floor(Math.random() * (maxBottom / 2)) + maxBottom / 4;
    
        
        // set initial positionY
        this.obstacle.style.bottom = `${randomBottom}px` 

        //  set initial positionX
        this.obstacle.style.left = `${this.positionX}vw`

       

        this.moveObstacle();
    }

    moveObstacle() {
        this.positionX -= 5; //speed
        this.obstacle.style.left = `${this.positionX}vw`;


       // removing obstacle from DOM and array
        if (this.positionX + this.width < 0) {
            this.obstacle.remove();  // remove the obstacles when out of the screen
            obstacles.splice(obstacles.indexOf(this), 1); //  delete from obstacles array
        }    
    }  
    checkCollision() {
        // check for collision with the player
        //  get the dimensions of the player and the obstacle
        // The Element.getBoundingClientRect() method returns a DOMRect object providing information about the size of an element and its position relative to the viewport.

       const playerDomRect = this.player.getBoundingClientRect();
       const obstacleDomRect = this.obstacle.getBoundingClientRect();

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

const obstacles = []; // array of obstacles

// generate new obstacles
setInterval(() => {
    const newObstacles = new Obstacle(player);
    obstacles.push(newObstacles);
}, 2000);

// move obstacles
setInterval(() => {
    obstacles.forEach((obstacle) => {
        obstacle.moveObstacle();
        obstacle.checkCollision();
    })
}, 100);





