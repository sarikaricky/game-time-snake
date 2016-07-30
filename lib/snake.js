
function Snake(x, y, width, height, direction) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.direction = direction;
}

//SNAKE MOVEMENT
Snake.prototype.moveRight = function() {
  if (this.x >= 380) {
    return (this.x = 380);
  }
  this.x = this.x + 20;
  this.direction = 'right';
};

Snake.prototype.moveLeft = function() {
  if (this.x <= 0) {
    return (this.x = 0);
  }
  this.x = this.x - 20;
  this.direction = 'left';
};

Snake.prototype.moveUp = function() {
  if (this.y <= 0) {
    return (this.y = 0);
  }
  this.y = this.y - 20;
  this.direction = 'up';
};

Snake.prototype.moveDown = function() {
  if (this.y >= 380) {
    return (this.y = 380);
  }
  this.y = this.y + 20 ;
  this.direction = 'down';
};

module.exports = Snake;
