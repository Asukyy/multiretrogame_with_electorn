
document.getElementById("spacein").addEventListener("click", spacein);
function spacein() {
    canvas = document.getElementById('game-container');
    var context = canvas.getContext('2d');
    /*-------------------------------------------------*/
    document.getElementById("spacein").disabled = true;
    document.getElementById("pong").disabled = false;
    document.getElementById("snake").disabled = false;
    document.getElementById("doodle").disabled = false;
    /*-------------------------------------------------*/

    const SPACE_HEIGHT = 20;
    const SPACE_WIDTH = 20;
 
    context.fillStyle = 'black';
    context.fillRect(0, 0, canvas.width, canvas.height);
 
    // Draw doodle
     context.fillStyle = 'white';
     context.fillRect(canvas.width / 2, 660, SPACE_WIDTH, SPACE_HEIGHT); // Head

     //clear the canvas
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.fillStyle = 'black';
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.fillStyle = 'white';
        context.fillRect(canvas.width / 2, 660, SPACE_WIDTH, SPACE_HEIGHT); // Head

   
    console.log("spacein");
}
