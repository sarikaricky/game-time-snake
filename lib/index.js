const canvas = document.getElementById("game-canvas");

const context = canvas.getContext('2d');

const Snake = require('./snake');

const World = require('./world');

const Food = require('./food');

var snake = new Snake(0, 0, 20, 20);
var world = new World(500, 500);

  function renderSnake() {
    context.fillStyle="blue";
    context.fillRect(snake.x, snake.y, snake.width, snake.height);
  }
  renderSnake();

setInterval(function() {
  context.clearRect(0, 0, world.width, world.height);
  renderSnake();
}, 60);

document.addEventListener('keydown', function(e) {
  e.preventDefault();
  if(e.keyCode === 39) { snake.moveRight(); }
  if(e.keyCode === 37) { snake.moveLeft(); }
  if(e.keyCode === 38) { snake.moveUp(); }
  if(e.keyCode === 40) { snake.moveDown(); }
});
