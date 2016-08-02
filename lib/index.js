const canvas = document.getElementById("game-canvas");
const context = canvas.getContext('2d');

const World = require('./world');
const Food = require('./food');
const Snake = require('./snake');
const Obstacle = require('./obstacle');

var world = new World(400, 400);

function renderWorld(world) {
  var snake = world.snake;
  var food = world.food;
  var totalSnake = world.totalSnake;

  // if(world.play) {
  context.clearRect(0, 0, world.width, world.height);
  context.fillStyle="#FF00AA";
  context.fillRect(food.x, food.y, food.width, food.height);
  fillSnake();
  // }
}

function fillSnake() {
  context.fillStyle="#00FF00";
  world.totalSnake.forEach(function(snake) {
    context.fillRect(
      snake.x,
      snake.y,
      snake.width,
      snake.height
    );
  });
}

setInterval(function () {
 world.tick();
 fillSnake();
}, 600);

requestAnimationFrame(function gameLoop() {
  renderWorld(world);
  world.isSnakeCollidingWithFood();
  world.isCollidingWithSelf();
  world.isSnakeCollidingWithWall();
  requestAnimationFrame(gameLoop);
});

document.addEventListener('keydown', function(e) {
  e.preventDefault();
  var keyInput = e.keyCode;
  if(keyInput === 39) { world.rightArrow(); }
  if(keyInput === 37) { world.leftArrow(); }
  if(keyInput === 38) { world.upArrow(); }
  if(keyInput === 40) { world.downArrow(); }
});


// function gameStart() {
//   score = 0;
//   level = 0;
//   renderWorld(world);
//   world.newFood();
// }
