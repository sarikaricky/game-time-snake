const canvas = document.getElementById("game-canvas");

const context = canvas.getContext('2d');

const Snake = require('./snake');

const World = require('./world');

const Food = require('./food');

var snake = new Snake(0, 0, 20, 20);
var food = new Food(100, 100, 20, 20);
var world = new World(400, 400);

function renderSnake() {
  context.fillStyle="blue";
  context.fillRect(snake.x, snake.y, snake.width, snake.height);
}
renderSnake();

function renderFood() {
  context.fillStyle="green";
  // food.foodRandomPlace();
  context.fillRect(food.x, food.y, food.width, food.height);
}
renderFood();

setInterval(function() {
  context.clearRect(0, 0, world.width, world.height);
  renderSnake();
  renderFood();
}, 60);

document.addEventListener('keydown', function(e) {
  e.preventDefault();
  if(e.keyCode === 39) { snake.moveRight(); }
  if(e.keyCode === 37) { snake.moveLeft(); }
  if(e.keyCode === 38) { snake.moveUp(); }
  if(e.keyCode === 40) { snake.moveDown(); }
});
