
document.getElementById("doodle").addEventListener("click", doodle);
function doodle() {
    canvas = document.getElementById('game-container');
    var context = canvas.getContext('2d');
   /*-------------------------------------------------*/  
    document.getElementById("doodle").disabled = true;
    document.getElementById("pong").disabled = false;
    document.getElementById("spacein").disabled = false;
    document.getElementById("snake").disabled = false;
   /*-------------------------------------------------*/

   const DOODLE_HEIGHT = 20;
   const DOODLE_WIDTH = 20;
   var img = new Image();
   img.src = "images/doodle_jump.png";
   context.fillStyle = 'white';
   context.fillRect(0, 0, canvas.width, canvas.height);

   // Draw doodle
    context.fillStyle = 'black';
    context.fillRect(canvas.width / 2, 660, DOODLE_WIDTH, DOODLE_HEIGHT);
    //declare une image

   console.log("doodle");
}

