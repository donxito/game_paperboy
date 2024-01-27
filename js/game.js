class Game {
    constructor() {
        this.start; 
        this.player = new Player();
        this.obstacle = new Obstacle();
        this.obstacles = [];
        this.gameIsOver = false;
        this.obstacleInterval = null;

        //this.startGame();
      
        
    }
}