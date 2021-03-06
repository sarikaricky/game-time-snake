const Snake = require('./snake');
const Food = require('./food');
const Obstacle = require('./obstacle');
const $ = require('jquery');

var maxLength = 2;

// WORLD CONSTRUCTOR
function World(width, height) {
  this.width = width;
  this.height = height;
  this.snake = new Snake(200, 200, 20, 20);
  this.newFood();
  this.totalSnake = [this.snake];
  this.obstacle = new Obstacle(300, 300, 20, 20);
  this.score = 0;
  this.level = 1;
}

// GENERATE NEW FOOD
World.prototype.newFood = function() {
  this.food = new Food(
    Math.round(Math.round(Math.random() * 380)/20) * 20,
    Math.round(Math.round(Math.random() * 380)/20) * 20,
    20,
    20
  );
};

// COLLISION CHECK
World.prototype.isSnakeCollidingWithFood = function(food) {
  if (this.food.x === this.totalSnake[0].x && this.food.y === this.totalSnake[0].y) {
    this.newFood();
    maxLength ++;
    this.increaseScore();
    this.changeLevel();
    return true;
  } else {
    return false;
  }
};

World.prototype.isSnakeCollidingWithObstacle = function(obstacle) {
  if (this.obstacle.x === this.totalSnake[0].x && this.obstacle.y === this.totalSnake[0].y) {
    return true;
  } else {
    return false;
  }
};

World.prototype.isCollidingWithSelf = function(x, y, totalSnake) {
  for (i = 1; i < this.totalSnake.length; i++) {
    var snakeBody = this.totalSnake;
    var snakeHead = this.totalSnake[0];
    if (snakeHead.x === snakeBody[i].x && snakeHead.y === snakeBody[i].y) {
      this.gameOver();
    }
  }
};

World.prototype.isSnakeCollidingWithWall = function() {
  if (this.totalSnake[0].x >= 400 || this.totalSnake[0].x <= -20 || this.totalSnake[0].y >= 400 || this.totalSnake[0].y <= -20) {
    this.gameOver();
    return true;
  } else {
    return false;
  }
};

// WORLD DIRECTIONS
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

World.prototype.removeTail = function() {
  if (this.totalSnake.length >= maxLength) {
    return this.totalSnake.pop();
  }
};

// SNAKE MOVEMENT
World.prototype.moveRight = function() {
  var xValue = this.totalSnake[0].x + 20;
  var yValue = this.totalSnake[0].y;
  this.totalSnake.unshift(new Snake(xValue, yValue, 20, 20, 'right'));
  this.removeTail();
};

World.prototype.moveLeft = function() {
  var xValue = this.totalSnake[0].x - 20;
  var yValue = this.totalSnake[0].y;
  this.totalSnake.unshift(new Snake(xValue, yValue, 20, 20, 'left'));
  this.removeTail();
};

World.prototype.moveUp = function() {
  var xValue = this.totalSnake[0].x;
  var yValue = this.totalSnake[0].y - 20;
  this.totalSnake.unshift(new Snake(xValue, yValue, 20, 20, 'up'));
  this.removeTail();
};

World.prototype.moveDown = function() {
  var xValue = this.totalSnake[0].x;
  var yValue = this.totalSnake[0].y + 20;
  this.totalSnake.unshift(new Snake(xValue, yValue, 20, 20, 'down'));
  this.removeTail();
};

// GAME FUNCTIONALITY
World.prototype.increaseScore = function() {
  this.score += 20;
  $('#user-score').html('<p>Score: ' + this.score + '</p>');
};

World.prototype.changeLevel = function() {
  if (this.score % 100 === 0) {
  this.level ++;
  $('#user-level').html('<p>level: ' + this.level + '</p>');
  }
};

World.prototype.gameOver = function() {
  $('.game-over-overlay').show();
  $('#game-canvas').hide();
};

module.exports = World;
