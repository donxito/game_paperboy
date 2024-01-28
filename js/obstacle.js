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

        
        this.obstacle.style.bottom = `${Math.floor(Math.random() * 200 + 20)}vh`; // move up, down
        

        // append to the DOM parent
        const obstacleElement = document.getElementById("game-road");
        obstacleElement.appendChild(this.obstacle);


        this.moveRightToLeft();
    }

    moveRightToLeft() {
        this.positionX -= 3;
        this.obstacle.style.left = `${this.positionX}vw`;
        console.log("moving to the player...")

        if (this.positionY < 0) {
            this.obstacle.remove()

        } 
        else if (this.positionY > 45) {
            this.obstacle.remove()
            
        }

        if (this.positionX + this.width < 0) {
            this.obstacle.remove();  // remove the obstacles when out of the screen
        }
        
    } //  FIX THIS!!!

    

    

    
}

const obstacles = []; // array of obstacles

setInterval(() => {
    const newObstacles = new Obstacle();
    obstacles.push(newObstacles);
}, 1000);

setInterval(() => {
    obstacles.forEach((obstacle) => {
        obstacle.moveRightToLeft();
    })
}, 100);




