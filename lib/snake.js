module.exports = Snake;

function Snake(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  // snakeArray = [];
}

//move snake
Snake.prototype.moveRightDirection = function() {
  this.direction = 'right';
  this.x = this.x + 1;
  // this.moveRightDirection();
};

Snake.prototype.moveLeftDirection = function() {
  this.direction = 'left';
  this.x = this.x - 1;
  // this.moveLeftDirection();
};

Snake.prototype.moveUpDirection = function() {
  this.direction = 'up';
  this.y = this.y + 1;
  // this.moveUpDirection();
};

Snake.prototype.moveDownDirection = function() {
  this.direction = 'down';
  this.y = this.y - 1;
  // this.moveDownDirection();
};

//snake grow
Snake.prototype.grow = function() {
  this.width = this.width + 2;
};
