
function Food(x, y, width, height, canvas) {
  // pass in canvas width and height as set values
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.canvas = canvas;
}

Food.prototype.foodRandomPlace = function() {

 this.x = Math.floor(Math.random() * this.canvas.width);
 this.y = Math.floor(Math.random() * this.canvas.height);
};

Food.prototype.foodIsEaten = function() {

};
// move behavior into one file  food.render
// game object each, object render


module.exports = Food;
