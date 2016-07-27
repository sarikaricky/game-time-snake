module.exports = Snake;

function Snake(x, y, width, height, world) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.world = world;
}

//move snake
Snake.prototype.moveRight = function() {
  // this.direction = 'right';
  this.x = this.x + 1;
};

Snake.prototype.moveLeft = function() {
  this.direction = 'left';
  this.x = this.x - 1;
};

Snake.prototype.moveUp = function() {
  this.direction = 'up';
  this.y = this.y - 1;
};

Snake.prototype.moveDown = function() {
  this.direction = 'down';
  this.y = this.y + 1;
};

//snake grow
Snake.prototype.grow = function() {
  this.width = this.width + 2;
};

//snake array
var GrowSnake = {
  snakeArray: [],
};
