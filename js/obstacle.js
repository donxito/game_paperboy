class Obstacle {
    constructor() {
        this.width = 10;
        this.height = 10;

        this.obstacle = null;

        this.positionX = 100; // start from the right side
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

        const gameRoadHeight = document.getElementById("game-road").offsetHeight;
        
        this.obstacle.style.bottom = `${Math.floor(Math.random() * gameRoadHeight)}vh`; // move up, down
        this.obstacle.style.left = `${this.positionX}vw`; // move left, right

        // append to the DOM parent
        const obstacleElement = document.getElementById("game-container");
        obstacleElement.appendChild(this.obstacle);


        this.moveRightToLeft();
    }

    moveRightToLeft() {
        this.positionX -= 3;
        this.obstacle.style.left = `${this.positionX}vw`;
        console.log("moving to the player...")

        if (this.positionX + this.width < 0) {
            this.obstacle.remove();  // remove the obstacles when out of the screen
        }
    }

    
}

const obstacles = []; // array of obstacles

setInterval(() => {
    const newObstacles = new Obstacle();
    obstacles.push(newObstacles);
}, 3000);

setInterval(() => {
    obstacles.forEach((obstacle) => {
        obstacle.moveRightToLeft();
    })
}, 100);




