const canvas = document.getElementById("game-canvas");

const context = canvas.getContext('2d');

const World = require('./world');

const Food = require('./food');

var world = new World(400, 400);

// var food = new Food(
//   this.x = Math.floor(Math.random() * 400),
//   this.y = Math.floor(Math.random() * 400),
//   20,
//   20
// );
// world.addFood(food);

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
  // world.tick();
  requestAnimationFrame(gameLoop);
});

document.addEventListener('keydown', function(e) {
  e.preventDefault();
  if(e.keyCode === 39) { world.rightArrow(); }
  if(e.keyCode === 37) { world.leftArrow(); }
  if(e.keyCode === 38) { world.upArrow(); }
  if(e.keyCode === 40) { world.downArrow(); }
});
