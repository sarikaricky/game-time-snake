
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
      if (snake.isSnakeColliding(food)) return result = true;
    });
  });
  return result;
};

// World.prototype.startGame = function (snake) {
//   var self = this;
// }

  // score equal to zero
  // need to know boundries of the world are
  // start game screen

  // start game
  // world be aware of food
  // world be aware of snake

  // aware of boundries

  // reset game
  // level up

  // collision of items

  // end game

  module.exports = World;
