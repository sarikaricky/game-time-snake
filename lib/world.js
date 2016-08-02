const Snake = require('./snake');
const Food = require('./food');
const Obstacle = require('./obstacle');

// WORLD CONSTRUCTOR
function World(width, height) {
  this.width = width;
  this.height = height;
  this.snake = new Snake(200, 200, 20, 20);
  this.newFood();
  this.totalSnake = [this.snake];
  this.obstacle = new Obstacle(300, 300, 20, 20);
  this.score = 0;
}


var level = 0;
var maxLength = 2;

// GENERATE NEW FOOD
World.prototype.newFood = function() {
  this.food = new Food(
    Math.round(Math.round(Math.random() * 380)/20) * 20,
    Math.round(Math.round(Math.random() * 380)/20) * 20,
    20,
    20
  );
};

World.prototype.changeScore = function() {
  this.score += 20;
  document.getElementById('user-score').innerHTML = "<p>Score: " + this.score + "</p>";
};

// SNAKE COLLISIONS
World.prototype.isSnakeCollidingWithFood = function(food) {
  if (this.food.x === this.totalSnake[0].x && this.food.y === this.totalSnake[0].y) {
    this.newFood();
    maxLength ++;
    this.changeScore();
  // } else {
  //   return false;
  }
};

World.prototype.isSnakeCollidingWithObstacle = function(obstacle) {
  if (this.obstacle.x === this.totalSnake[0].x && this.obstacle.y === this.totalSnake[0].y) {
    // gameOVER
    return true;
  } else {
    return false;
  }
};

World.prototype.isCollidingWithSelf = function(x, y, totalSnake) {
  for (i = 1; i < this.totalSnake.length; i++) {
    var snakeCompare = this.totalSnake;
    if (this.totalSnake[0].x === snakeCompare[i].x && this.totalSnake[0].y === snakeCompare[i].y) {
  }
}
};

World.prototype.isSnakeCollidingWithWall = function() {
  if (this.totalSnake[0].x >= 380 || this.totalSnake[0].x <= 0 || this.totalSnake[0].y >= 380 || this.totalSnake[0].y <= 0) {
    // gameStart();
    return true;
  } else {
    return false;
  }
};

//WORLD DIRECTIONS
World.prototype.rightArrow = function() {
  this.moveRight();
};

World.prototype.leftArrow = function() {
  this.moveLeft();
};

World.prototype.upArrow = function() {
  this.moveUp();
};

World.prototype.downArrow = function() {
  this.moveDown();
};

World.prototype.tick = function() {
  var direction = this.totalSnake[0].direction;
    if (direction === 'right') { this.moveRight(); }
    if (direction === 'left') { this.moveLeft(); }
    if (direction === 'up') { this.moveUp(); }
    if (direction === 'down') { this.moveDown(); }
};

World.prototype.moveRight = function() {
  var xValue = this.totalSnake[0].x + 20;
  var yValue = this.totalSnake[0].y;
  this.totalSnake.unshift(new Snake(
    xValue,
    yValue,
    20,
    20,
    'right')
  );
  this.removeTail();
};

World.prototype.moveLeft = function() {
  var xValue = this.totalSnake[0].x - 20;
  var yValue = this.totalSnake[0].y;
  this.totalSnake.unshift(new Snake(
    xValue,
    yValue,
    20,
    20,
    'left')
  );
  this.removeTail();
};

World.prototype.moveUp = function() {
  var xValue = this.totalSnake[0].x;
  var yValue = this.totalSnake[0].y - 20;
  this.totalSnake.unshift(new Snake(
    xValue,
    yValue,
    20,
    20,
    'up'
    )
  );
  this.removeTail();
};

World.prototype.moveDown = function() {
  var xValue = this.totalSnake[0].x;
  var yValue = this.totalSnake[0].y + 20;
  this.totalSnake.unshift(new Snake(
    xValue,
    yValue,
    20,
    20,
    'down'
    )
  );
  this.removeTail();
};

World.prototype.removeTail = function() {
  if (this.totalSnake.length >= maxLength) {
  return this.totalSnake.pop();
}
};

// function increaseScore() {
//   this.score += 20;
//   return this.score;
// }

module.exports = World;
