const canvas = document.getElementById("game-canvas");

const context = canvas.getContext('2d');

const World = require('./world');

var world = new World(400, 400);

// var food = new Food(
//   this.x = Math.floor(Math.random() * canvas.width);
//   this.y = Math.floor(Math.random() * canvas.height);


function renderWorld(world) {
  var snake = world.snake;
  var food = world.food;
  context.clearRect(0, 0, world.width, world.height);
  context.fillStyle="blue";
  context.fillRect(snake.x, snake.y, snake.width, snake.height);
  context.fillStyle="green";
  context.fillRect(food.x, food.y, food.width, food.height);
}

requestAnimationFrame(function gameLoop() {
  renderWorld(world);
  world.tick();
  requestAnimationFrame(gameLoop);
});

function gameOver() {
  window.alert('Game over!');
}

document.addEventListener('keydown', function(e) {
  e.preventDefault();
  if(e.keyCode === 39) { world.snake.moveRight(); }
  if(e.keyCode === 37) { world.snake.moveLeft(); }
  if(e.keyCode === 38) { world.snake.moveUp(); }
  if(e.keyCode === 40) { world.snake.moveDown(); }
});






// var startBtn = $('#start-button');
// var resetBtn  = $('#reset-button');
//
// startBtn.on('click', function() {
//   gameArea.start();
//   snake direction 'right' by default
//   createFood();
//   userscore = 0;
// });
//
// resetBtn.on('click', function() {
//
// });
