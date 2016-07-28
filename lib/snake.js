
// function Snake(x, y, width, height, world) {
//   this.x = x;
//   this.y = y;
//   this.width = width;
//   this.height = height;
//   this.world = world;
//   this.bodySegments = [];
//}

function Snake() {
  this.segments = [
    { x: 0, y: 0, width: 20, height: 20},
    { x: 1, y: 0, width: 20, height: 20},
    { x: 2, y: 0, width: 20, height: 20 },
  ];
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

//SNAKE COLLIDES WITH WALL
Snake.prototype.isSnakeCollidingWithWall = function() {
  if (this.x >= 380 || this.x <= 0 || this.y >= 380 || this.y <= 0) {
    return true;
  } else {
    return false;
  }
};

// SNAKE COLLIDES WITH FOOD
Snake.prototype.isSnakeCollidingWithFood = function(food) {
  return food.x === this.x && food.y === this.y
};

Snake.prototype.snakeEatFood = function(food) {
  if (snake.isSnakeCollidingWithFood(food)) {
    renderFood();
  }
};



Snake.prototype.head = function () {
  return this.segments[0];
}

Snake.prototype.tail = function () {
  return this.segments.slice(1);
}
//SNAKE GROW
// Snake.prototype.grow = function() {
//   this.width = this.width + 2;
// };

// Snake.prototype.growSnake = function() {
//   var snakeLength = 1;
//   snakeArray = [];
//   for(var i = 0; i < snakeLength; i++ ) {
//     snakeArray.push({x: i, y: 0});
//   }
//   if (isSnakeColliding() {
//     var tail = ({x: i, y: 0});
//   };
// };


module.exports = Snake;
