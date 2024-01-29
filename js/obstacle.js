class Obstacle {
    constructor() {
        this.width = 10;
        this.height = 10;

        this.obstacle = null;

        this.positionX = 110; // start from the right side
        this.positionY = 0;

        this.createObstacleElement();
    }

    createObstacleElement() {
        // create the element
        this.obstacle = document.createElement("div");

        // add/modify content
        this.obstacle.setAttribute("class", "obstacle");
    
        this.obstacle.style.width = `${this.width}vw`; // width size
        this.obstacle.style.height = `${this.height}vh`; // height size

        // append to the DOM parent
        const obstacleElement = document.getElementById("game-road");
        obstacleElement.appendChild(this.obstacle);

        // random value for position on positionY between 0 and maxBottom within game-road height using .offsetHight and Math.random

        // The HTMLElement.offsetHeight read-only property returns the height of an element, including vertical padding and borders, as an integer

        const gameRoadHeight = document.getElementById("game-road").offsetHeight;
        const maxBottom = gameRoadHeight - this.height;
        const randomBottom = Math.floor(Math.random() * maxBottom);
        
        // set initial positionY
        this.obstacle.style.bottom = `${randomBottom}px` 

        //  set initial positionX
        this.obstacle.style.left = `${this.positionX}vw`

       

        this.moveObstacle();
    }

    moveObstacle() {
        this.positionX -= 3;
        this.obstacle.style.left = `${this.positionX}vw`;
        console.log("Moving from right to left side")

       
        if (this.positionX + this.width < 0) {
            this.obstacle.remove();  // remove the obstacles when out of the screen
        }
        
    } 

    
}

const obstacles = []; // array of obstacles

setInterval(() => {
    const newObstacles = new Obstacle();
    obstacles.push(newObstacles);
}, 1500);

setInterval(() => {
    obstacles.forEach((obstacle) => {
        obstacle.moveObstacle();
    })
}, 100);




