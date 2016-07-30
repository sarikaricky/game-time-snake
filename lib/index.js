const canvas = document.getElementById("game-canvas");
const context = canvas.getContext('2d');

const World = require('./world');
const Food = require('./food');
const Snake = require('./snake');

var world = new World(400, 400);

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
  world.food.foodRandomPlace(this.food);
  // world.tick();
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
