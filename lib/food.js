module.exports = Food;

function Food(x, y, width, height, canvas) {
  // pass in canvas width and height as set values
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
}

Food.prototype.foodRandomPlace = function() {
 this.x = Math.floor(Math.random() * canvas.width);
 this.y = Math.floor(Math.random() * canvas.height);
};

// move behavior into one file  food.render
// game object each, object render
