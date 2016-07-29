
function Snake(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
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

module.exports = Snake;
