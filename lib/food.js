
function Food(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
}

Food.prototype.foodRandomPlace = function() {
  this.x = Math.floor(Math.random() * 400);
  this.y = Math.floor(Math.random() * 400);
};

Food.prototype.foodIsEaten = function() {

};

module.exports = Food;
