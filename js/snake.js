document.getElementById("snake").addEventListener("click", snake);
function snake() {
    canvas = document.getElementById('game-container');
    var context = canvas.getContext('2d');
    /*-------------------------------------------------*/
    document.getElementById("snake").disabled = true;
    document.getElementById("pong").disabled = false;
    document.getElementById("spacein").disabled = false;
    document.getElementById("doodle").disabled = false;
    /*-------------------------------------------------*/

    const SNAKE_SPEED = 20;
    const SNAKE_HEIGHT = 20;
    const SNAKE_WIDTH = 20;

    // Draw field
    context.fillStyle = 'green';
    context.fillRect(0, 0, canvas.width, canvas.height);

    // Draw snake
    context.fillStyle = 'white';
    context.fillRect(canvas.width / 2, canvas.height / 2, SNAKE_WIDTH, SNAKE_HEIGHT); // Head

    //Draw apple at a random position
    var apple = {
        x: Math.floor(Math.random() * canvas.width),
        y: Math.floor(Math.random() * canvas.height)
    };
    context.fillStyle = 'red';
    context.fillRect(apple.x, apple.y, 10, 10);
    console.log(apple.x, apple.y);

    // Draw score
    var i = 0;
    context.fillStyle = 'white';
    context.font = '20px Arial';
    context.fillText(i, canvas.width / 2, 20);

    //Deplacement du serpent
    var snake = {
        x: canvas.width / 2,
        y: canvas.height / 2,
        speed: {
            x: SNAKE_SPEED,
            y: 0
        },
        tail: [{
            x: canvas.width / 2,
            y: canvas.height / 2
        }]
    };

    //Déplacement du serpent
    function moveSnake() {
        snake.x += snake.speed.x;
        snake.y += snake.speed.y;
        //Collision avec les bords du canvas
        if (snake.x < 0) {
            snake.x = canvas.width;
        }
        if (snake.x > canvas.width) {
            snake.x = 0;
        }
        if (snake.y < 0) {
            snake.y = canvas.height;
        }
        if (snake.y > canvas.height) {
            snake.y = 0;
        }
        
        //Collision avec la queue du serpent
        for (var j = 0; j < snake.tail.length; j++) {
            if (snake.x === snake.tail[j].x && snake.y === snake.tail[j].y) {
                alert("Game Over");
                SNAKE_SPEED = 0;
            }
        }
        //Collision avec la pomme
        if (snake.x === apple.x && snake.y === apple.y) {
            apple.x = Math.floor(Math.random() * canvas.width);
            apple.y = Math.floor(Math.random() * canvas.height);
            snake.tail.push({
                x: snake.x,
                y: snake.y
            });
            i++;
            context.fillText(i, canvas.width / 2, 20);
        }

        //Déplacement de la queue du serpent
       
        if (snake.tail.length > i) {
            snake.tail.shift();
        }
        //Dessin du serpent
        context.fillStyle = 'white';
        context.fillRect(snake.x, snake.y, SNAKE_WIDTH, SNAKE_HEIGHT);
        for (var j = 0; j < snake.tail.length; j++) {
        }
        
// si j'appuie sur la fleche gauche, le serpent va vers la gauche
        document.addEventListener('keydown', function (event) {
            if (event.keyCode === 37) {
                snake.speed.x = -SNAKE_SPEED;
                snake.speed.y = 0;
                if(event.keyCode === 39){
                    snake.speed.x = 0;
                }

            }
            if (event.keyCode === 38) {
                snake.speed.x = 0;
                snake.speed.y = -SNAKE_SPEED;
            }
            if (event.keyCode === 39) {
                snake.speed.x = SNAKE_SPEED;
                snake.speed.y = 0;
            }
            if (event.keyCode === 40) {
                snake.speed.x = 0;
                snake.speed.y = SNAKE_SPEED;
            }
        });
    }
    v
    console.log("snake");
}