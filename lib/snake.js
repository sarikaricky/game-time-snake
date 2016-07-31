
function Snake(x, y, width, height, direction) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.direction = direction;
  this.totalSnake = [this.snake];
  // this.directionKey = {
  //   "right": this.moveRight(),
  //   "left": this.moveLeft(),
  //   "up": this.moveUp(),
  //   "down": this.moveDown()
  // };
  // // this.previousMove = "";
  // // this.nextMove = "";
}

Snake.prototype.moveRight = function() {
  var xValue = this.totalSnake[0].x + 20;
  var yValue = this.totalSnake[0].y;
  this.totalSnake.unshift(new Snake(
    xValue,
    yValue,
    20,
    20
    )
  );
  this.removeTail();
  this.direction = 'right';
};

Snake.prototype.moveLeft = function() {
  var xValue = this.totalSnake[0].x - 20;
  var yValue = this.totalSnake[0].y;
  this.totalSnake.unshift(new Snake(
    xValue,
    yValue,
    20,
    20
    )
  );
  this.removeTail();
  this.direction = 'left';
};

Snake.prototype.moveUp = function() {
  var xValue = this.totalSnake[0].x;
  var yValue = this.totalSnake[0].y - 20;
  this.totalSnake.unshift(new Snake(
    xValue,
    yValue,
    20,
    20
    )
  );
  this.removeTail();
  this.direction = 'up';
};

Snake.prototype.moveDown = function() {
  var xValue = this.totalSnake[0].x;
  var yValue = this.totalSnake[0].y + 20;
  this.totalSnake.unshift(new Snake(
    xValue,
    yValue,
    20,
    20
    )
  );
  this.removeTail();
  this.direction = 'down';
};

Snake.prototype.removeTail = function() {
  return this.totalSnake.pop();
};

module.exports = Snake;
