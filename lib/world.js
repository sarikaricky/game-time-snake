const Snake = require('./snake');

const Food = require('./food');

// WORLD CONSTRUCTOR
function World(width, height) {
  this.width = width;
  this.height = height;
  this.snake = new Snake(0, 0, 20, 20);
  this.newFood();
  this.totalSnake = [this.snake, this.snake, this.snake];
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

World.prototype.createTotalSnake = function() {
  this.totalSnake.push(new Snake(1, 1, 20, 20));
  console.log(this.totalSnake)
};

// World.prototype.growSnake = function() {
//   debugger;
//   var xValue = this.totalSnake[this.totalSnake.length - 1].x;
//   var yValue = this.totalSnake[this.totalSnake.length - 1].y;
//   return this.totalSnake.push(new Snake(
//     xValue,
//     yValue,
//     20,
//     20
//     )
//   );
// };

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
    console.log("TOTAL SNAKE", this.totalSnake);
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
