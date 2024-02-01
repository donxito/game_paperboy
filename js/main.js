console.log("hello there");


// start game sound
document.addEventListener('DOMContentLoaded', function() {
    const gameAudio = document.getElementById("game-audio");

    // Wait for a user interaction, then play the audio
    document.addEventListener('click', function() {
        gameAudio.play();
    });
});


// game over sound
document.addEventListener('DOMContentLoaded', function() {
    const gameAudio = document.getElementById("game-lost");

    // Wait for a user interaction, then play the audio
    document.addEventListener('click', function() {
        gameAudio.play();
    });
});

 
// Initialize the game object
const game = {
    player: new Player(),
};



// Event listener for keydown events
document.addEventListener('keydown', handleKeyPress);
document.addEventListener("keydown", handleKeydown);
