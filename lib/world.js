const Snake = require('./snake');

const Food = require('./food');

function World(width, height) {
  this.width = width;
  this.height = height;
  this.snake = new Snake(0, 0, 20, 20);
  this.food = new Food(
    Math.floor(Math.random() * 380),
    Math.floor(Math.random() * 380),
    20,
    20
    );
  this.totalSnake = [this.snake];
}

//SNAKE GROWS
World.prototype.growSnake = function() {
  return this.totalSnake.push(new Snake(0, 20, 20, 20));
};

// POSITION SECOND SNAKE
// add second piece
// position this piece in the spot the origional snake previously was
// needs to happen on subsequent frame, once snake is out of position

//SNAKE COLLISIONS
World.prototype.isSnakeCollidingWithFood = function () {
  return this.snake.isSnakeCollidingWithFood(this.food);
};

Snake.prototype.isSnakeCollidingWithFood = function(food) {
  return food.x === this.x && food.y === this.y;
};

Snake.prototype.isSnakeCollidingWithWall = function() {
  if (this.x >= 380 || this.x <= 0 || this.y >= 380 || this.y <= 0) {
    return true;
  }
};

Snake.prototype.snakeEatFood = function(food) {
  if (snake.isSnakeCollidingWithFood(food)) {
    renderFood();
  }
};

//WORLD DIRECTIONS
World.prototype.rightArrow = function() {
  this.snake.moveRight();
};

World.prototype.leftArrow = function() {
  this.snake.moveLeft();
};

World.prototype.upArrow = function() {
  this.snake.moveUp();
};

World.prototype.downArrow = function() {
  this.snake.moveDown();
};

World.prototype.tick = function() {
  var direction = this.snake.direction;
    if (direction === 'right') { this.snake.moveRight(); }
    if (direction === 'left') { this.snake.moveLeft(); }
    if (direction === 'up') { this.snake.moveUp(); }
    if (direction === 'down') { this.snake.moveDown(); }
  };


// World.prototype.addFood = function(food) {
//   food.world = this;
//   this.food.push(food);
// };

  // start game
    // score equal to zero

  // reset game
  // level up

  // end game

  module.exports = World;
