
function World(width, height) {
  this.width = width;
  this.height = height;
  this.snake = [];
  this.food = [];
}

World.prototype.addSnake = function(snake) {
  snake.world = this;
  this.snake.push(snake);
};

World.prototype.addFood = function(food) {
  food.world = this;
  this.food.push(food);
};

World.prototype.isSnakeColliding = function () {
  var snakes = this.snake;
  var foods  = this.food;
  var result = false;
  snakes.forEach(function(snake) {
    foods.forEach(function(food) {
      if (snake.isSnakeColliding(food)) { return (result = true); }
    });
  });
  return result;
};

  // start game
    // score equal to zero

  // reset game
  // level up

  // end game

  module.exports = World;
