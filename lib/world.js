const Snake = require('./snake');

const Food = require('./food');

function World(width, height) {
  this.width = width;
  this.height = height;
  this.snake = new Snake(0, 0, 20, 20);
  this.food = new Food(100, 100, 20, 20);
}

//SNAKE COLLISIONS
World.prototype.isSnakeCollidingWithFood = function () {
  return this.snake.isSnakeCollidingWithFood(this.food);
};

Snake.prototype.isCollidingWithSegments = function () {
  var head = this.head();
  var tail = this.tail();

  for (var i; i < tail.length; i++) {
    if (head.x === tail.x && head.y === tail.y) {
      return true;
    }
  }
  return false;
};

Snake.prototype.isSnakeCollidingWithWall = function() {
  if (this.x >= 380 || this.x <= 0 || this.y >= 380 || this.y <= 0) {
    return true;
  } else {
    return false;
  }
};

Snake.prototype.isSnakeCollidingWithFood = function(food) {
  return food.x === this.x && food.y === this.y;
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


// function gameOver() {
//   window.alert('Game over!');
// }
  // start game
    // score equal to zero

  // reset game
  // level up

  // end game

  module.exports = World;
