
function Snake(x, y, width, height, world) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.world = world;
}

//SNAKE MOVEMENT
Snake.prototype.moveRight = function() {
  if (this.x + this.width >= 380) {
    return (this.x = 380);
  }
  this.x = this.x + this.width;
};

Snake.prototype.moveLeft = function() {
  if (this.x <= 0) {
    return (this.x = 0);
  }
  this.x = this.x - this.width;
};

Snake.prototype.moveUp = function() {
  if (this.y <= 0) {
    return (this.y = 0);
  }
  this.y = this.y - this.height;
};

Snake.prototype.moveDown = function() {
  if (this.y + this.width >= 380) {
    return (this.y = 380);
  }
  this.y = this.y + this.height;
};

// SNAKE COLLIDES WITH FOOD
Snake.prototype.isSnakeColliding = function(food) {
  if (food.x === this.x && food.y && this.y) {
    return true;
  } else {
    return false;
  }
};

//SNAKE GROW
// Snake.prototype.grow = function() {
//   this.width = this.width + 2;
// };

Snake.prototype.growSnake = function() {
  var snakeLength = 1;
  snakeArray = [];
  for(var i = 0; i < snakeLength; i++ ) {
    snakeArray.push({x: i, y: 0});
  }
};

module.exports = Snake;
