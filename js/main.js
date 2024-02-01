console.log("hello there");

// Event listener for keydown events
document.addEventListener('keydown', handleKeyPress);
document.addEventListener("keydown", handleKeydown);


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


// time clock
function showTime() {
    const timeContainer = document.getElementById("timeContainer");
    const time = document.getElementById("timer");
    let start = Date.now();
    let min = 0;
    let sec = 0;

    function updateTimer() {
        const now = Date.now();
        const elapsedMilliseconds = now - start;
        
        // Calculate minutes and seconds
        min = Math.floor(elapsedMilliseconds / (60 * 1000));
        sec = Math.floor((elapsedMilliseconds % (60 * 1000)) / 1000);

        // Display the time
        time.innerText = `${min}:${sec < 10 ? '0' : ''}${sec}`;

        if (min === 1) {
            const win = new Audio("sound/win.wav");
            win.play();
            alert(`Congratulations, you got the job!`)
        }
    }

    // Update the timer every second
    const timerInterval = setInterval(updateTimer, 1000);

  
}


 
// Initialize the game 

showTime();

const game = {
    player: new Player(),
    
};




