const Snake = require('./snake');

const Food = require('./food');



function World(width, height) {
  this.width = width;
  this.height = height;
  this.snake = new Snake(0, 0, 20, 20);
  this.food = new Food(100, 100, 20, 20);
}

World.prototype.isSnakeCollidingWithFood = function () {
  return this.snake.isSnakeCollidingWithFood(this.food);
};




Snake.isColliding = function () {
  var head = this.head();
  var tail = this.tail();

  for (var i; i < tail.length; i++) {
    if (head.x === tail.x && head.y === tail.y) {
      return true;
    }
  }

  return false;
}
  // start game
    // score equal to zero

  // reset game
  // level up

  // end game

  module.exports = World;
