const Snake = require('./snake');

const Food = require('./food');

// WORLD CONSTRUCTOR
function World(width, height) {
  this.width = width;
  this.height = height;
  this.snake = new Snake(0, 0, 20, 20);
  this.newFood();
  this.totalSnake = [this.snake];
}

// LEVEL UP
World.prototype.newFood = function() {
  this.food = new Food(
    (Math.floor(Math.random() * (20 - 0+ 1)) + 0) * 20,
    (Math.floor(Math.random() * (20 - 0 + 1)) + 0) * 20,
    20,
    20
  );
};


//SNAKE COLLISIONS

World.prototype.isSnakeCollidingWithFood = function(food) {
  // console.log("FOOD X" + this.food.x)
  // console.log("FOOD Y" + this.food.y)
  //
  // console.log("SNAKE HEAD X" + this.totalSnake[0].x)
  // console.log("SNAKE HEAD Y" + this.totalSnake[0].y)
  //
  // console.log(this.food.x === this.totalSnake[0].x && this.food.y === this.totalSnake[0].y);
  if (this.food.x === this.totalSnake[0].x && this.food.y === this.totalSnake[0].y) {
    // this.growSnake();
    // this.food
    this.totalSnake.push(new Snake(this.food.x, this.food.y, 20, 20))
    this.newFood();
    return true;
  } else {
    return false;
  }
};

World.prototype.isSnakeCollidingWithWall = function() {
  if (this.snake.x >= 380 || this.snake.x <= 0 || this.snake.y >= 380 || this.snake.y <= 0) {
    return true;
  }
};

// TICK

World.prototype.tick = function() {
  var direction = this.snake.direction;

  if (direction === 'right') { this.totalSnake[0].moveRight(); }
  if (direction === 'left') { this.totalSnake[0].moveLeft(); }
  if (direction === 'up') { this.totalSnake[0].moveUp(); }
  if (direction === 'down') { this.totalSnake[0].moveDown(); }
};

//WORLD DIRECTIONS
World.prototype.rightArrow = function() {
  this.totalSnake[0].moveRight();
};

World.prototype.leftArrow = function() {
  this.totalSnake[0].moveLeft();
};

World.prototype.upArrow = function() {
  this.totalSnake[0].moveUp();
};

World.prototype.downArrow = function() {
  this.totalSnake[0].moveDown();
};

// World.prototype.moveRight = function() {
//   var xValue = this.totalSnake[0].x + 20;
//   var yValue = this.totalSnake[0].y;
//   this.totalSnake.unshift(new Snake(
//     xValue,
//     yValue,
//     20,
//     20
//     )
//   );
//   this.removeTail();
// };
//
// World.prototype.moveLeft = function() {
//   var xValue = this.totalSnake[0].x - 20;
//   var yValue = this.totalSnake[0].y;
//   this.totalSnake.unshift(new Snake(
//     xValue,
//     yValue,
//     20,
//     20
//     )
//   );
//   this.removeTail();
// };
//
// World.prototype.moveUp = function() {
//   var xValue = this.totalSnake[0].x;
//   var yValue = this.totalSnake[0].y - 20;
//   this.totalSnake.unshift(new Snake(
//     xValue,
//     yValue,
//     20,
//     20
//     )
//   );
//   this.removeTail();
// };
//
// World.prototype.moveUp = function() {
//   var xValue = this.totalSnake[0].x;
//   var yValue = this.totalSnake[0].y + 20;
//   this.totalSnake.unshift(new Snake(
//     xValue,
//     yValue,
//     20,
//     20
//     )
//   );
//   this.removeTail();
// };
//
// World.prototype.removeTail = function() {
//   return this.totalSnake.pop();
// };



//
// World.prototype.moveRight = function() {
//   if (snake.x >= 380) {
//     return (snake.x = 380);
//   }
//   snake.x = snake.x + 20;
//   snake.direction = 'right';
// };
//
// World.prototype.moveLeft = function() {
//   if (snake.x <= 0) { return (snake.x = 0); }
//   snake.x = snake.x - 20;
//   snake.direction = 'left';
// };
//
// World.prototype.moveUp = function() {
//   if (snake.y <= 0) { return (snake.y = 0); }
//   snake.y = snake.y - 20;
//   snake.direction = 'up';
// };
//
// World.prototype.moveDown = function() {
//   if (snake.y >= 380) { return (snake.y = 380); }
//   snake.y = snake.y + 20;
//   snake.direction = 'down';
// };

  module.exports = World;
