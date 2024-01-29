# PROJECT PLANNING

## Define the Game MVP:

- **Player Movement:** Implement basic player movement controls for driving the bike on the game canvas.
  
- **Obstacles:** Introduce a single type of obstacle (cars) that the player needs to avoid while riding the bike.
  
- **User Input:** Handle user input for controlling the bike's movement and allowing the player to throw newspapers.
  
- **Game State:** Keep track of the player's position, the position of obstacles, and the score.
  
- **Rendering:** Render the game elements on the web page using the HTML canvas and update the display based on the game state.

## Milestones:

### Milestone 1 - Project Setup and Player Movement 

- **Project Initial Setup:** - 
  - Set up the HTML file with a canvas element for rendering the game. 
  - Style the canvas using CSS to position it on the web page.
  - Create player element.

- **Player Class:** 
  - Create a Player class with properties for position and speed.
  
- **Game Class:** 
  - Implement basic player movement controls for driving the bike on the game canvas.
  - Implement methods in the Player class to move based on user input.
  - Ensure the player stays within the game boundaries.

### Milestone 2 - Obstacles 

- **Obstacles:** 
  - Introduce a single type of obstacle (e.g., cars) that the player needs to avoid while riding the bike.
  - Randomly generate and position obstacles on the game canvas.
  - Create an Obstacle class with properties for position and speed.
  - Implement a method in the Obstacle class to move the obstacle from right to left.
  - Obstacle needs to say inside the div height


### Milestone 3 -  Collision Detection and Throw object

- **Collision Detection:**
  - Define game over conditions when the player collides with obstacles.
  - Implement basic collision detection between the player and obstacles.
  - Create a method in the Game class to check for collisions between the player and obstacles.
  - End the game or lose energy/health/lives and display the score when a collision occurs.

   **Throw objects:**
  - Handle user input for controlling the bike's movement and allowing the player to throw newspapers.
  - Implement a method in the Player class to throw newspapers.
  - Create a mechanism to track and render newspapers.
  - Check for collisions between newspapers and obstacles and the correct place to throw them.

### Milestone 4 - Game State, Basic Logic, Score Tracking

- **Game State:**
  - Define variables for the player, obstacles, score, and game state.
  - Update the game state based on user input and interactions with obstacles.

- **Basic Game Logic:**
  - Implement basic game logic for scoring points when the player successfully delivers newspapers to houses.
  - Define game over conditions when the player fails to deliver newspapers.
    - Track the player's score based on successful deliveries.
  - Add a score property to the Player class.
  - Increment the score when a newspaper is successfully delivered (avoiding obstacles).

### Milestone 5 - Game Over Screen

- Display a game over screen with the final score when the game ends.
- Implement a game over condition (e.g., collisions with obstacles).
- Display the final score on the screen when the game is over.
- Allow the player to restart the game.

### Milestone 6 - Rendering and Testing

- **Rendering:**
  - Ensure smooth player movement within the game environment. **TO FIX**
  - Add sound effects for player actions (throwing newspapers, collisions, etc.).
  - Write a function to render the game elements on the canvas, including the player, obstacles, health/energy, and score.
  - Use JavaScript to draw the game elements on the canvas based on their positions and states.
  - Add background images and improve the overall visual appeal.

- **Testing and Debugging:**
  - Test the MVP to ensure that user input, game state updates, and rendering work as expected.
  - Debug any issues related to player movement, obstacle interactions, and game logic.

### Milestone 8 - Deployment

- Make the game accessible online.
- Host the game on GitHub
