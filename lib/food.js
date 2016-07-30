
function Food(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
}

Food.prototype.foodRandomPlace = function() {
  var food = new Food(
    (Math.floor(Math.random() * (20 - 0+ 1)) + 0) * 20,
    (Math.floor(Math.random() * (20 - 0 + 1)) + 0) * 20,
    20,
    20
  );
};

//FOOD BOUNDARIES
Food.prototype.rightBoundary = function() {
  if (this.x >= 380) {
    return (this.x = 380);
  }
};

Food.prototype.leftBoundary = function() {
  if (this.x <= 0) {
    return (this.x = 0);
  }
};

Food.prototype.topBoundary = function() {
  if (this.y <= 0) {
    return (this.y = 0);
  }
};

Food.prototype.bottomBoundary = function() {
  if (this.y >= 380) {
    return (this.y = 380);
  }
};

module.exports = Food;
