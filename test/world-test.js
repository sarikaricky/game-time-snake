const assert = require('chai').assert;
const World = require('../lib/world');
const Snake = require('../lib/snake');
const Food = require('../lib/food');

describe('World', function() {
  context('assigned attributes', function() {
    it('should create a world', function() {
      var world = new World();
      assert.isObject(world);
    });

    it('should have a width and height', function() {
      var world = new World(400, 400);
      assert.equal(world.height, 400);
      assert.equal(world.width, 400);
    });
  });

  context('totalSnake build', function() {
    it('should be an array', function() {
      var snake = new Snake(20, 20, 20, 20);
      var world = new World(400, 400);
      var totalSnake = world.totalSnake;
      assert.isArray(totalSnake);
    });
  });

  context('detect snake collisions', function() {
    it.skip('"isSnakeCollidingWithFood()" should return true if the x and y values of snake head equals the x and y values of the food', function() {
      var world = new World(400, 400);
      var snakeHead = world.totalSnake.unshift(new Snake(world.food.x, world.food.y, 20, 20));
      assert.isTrue(world.isSnakeCollidingWithFood(), true);
    });

    it('"isSnakeCollidingWithObstacle()" should return true if the x and y values of snake head equals the x and y values of the obstacle', function() {
      var world = new World(400, 400);
      var snakeHead = world.totalSnake.unshift(new Snake(world.obstacle.x, world.obstacle.y, 20, 20));
      assert.isTrue(world.isSnakeCollidingWithObstacle(), true);
    });

    it.skip('"isCollidingWithSelf()" should return true if the x and y values of snake segments isTrue to x and y values of the snake head', function() {
      var world = new World(400, 400);
      var snakeBody = world.totalSnake.push(new Snake(200, 200, 20, 20));
      assert.isTrue(world.isCollidingWithSelf(), true);
    });

    it('"isSnakeCollidingWithWall()" should return true if the x value of the index 0 snake is greater than 400px', function() {
      var world = new World(400, 400);
      world.totalSnake.unshift(new Snake(420, 20, 20, 20));
      assert.isTrue(world.isSnakeCollidingWithWall(), true);
    });

    it('"isSnakeCollidingWithWall()" should return true if the x value of the index 0 snake is less than 0px', function() {
      var world = new World(400, 400);
      world.totalSnake.unshift(new Snake(-40, 20, 20, 20));
      assert.isTrue(world.isSnakeCollidingWithWall(), true);
    });

    it('"isSnakeCollidingWithWall()" should return true if the y value of the index 0 snake is greater than 400px', function() {
      var world = new World(400, 400);
      world.totalSnake.unshift(new Snake(20, 420, 20, 20));
      assert.isTrue(world.isSnakeCollidingWithWall(), true);
    });

    it('"isSnakeCollidingWithWall()" should return true if the y value of the index 0 snake is less than 0px', function() {
      var world = new World(400, 400);
      world.totalSnake.unshift(new Snake(20, -40, 20, 20));
      assert.isTrue(world.isSnakeCollidingWithWall(), true);
    });
  });

  context('move snake direction via arrow keys', function() {
    it('"rightArrow()" should move the snake right in the world', function() {
      var world = new World(400, 400);
      assert.isFunction(world.rightArrow);
    });

    it('"leftArrow()" should move the snake left in the world', function() {
      var world = new World(400, 400);
      assert.isFunction(world.leftArrow);
    });

    it('"upArrow()" should move the snake up in the world', function() {
      var world = new World(400, 400);
      assert.isFunction(world.upArrow);
    });

    it('"downArrow()" should move the snake down in the world', function() {
      var world = new World(400, 400);
      assert.isFunction(world.downArrow);
    });
  });

  context('continuous snake movement on tick', function() {
    it('"tick" should continue snake movement in the right direction if given "right"', function() {
      var world = new World(400, 400);
      world.totalSnake.unshift(new Snake(200, 200, 20, 20,'right'));
      assert.equal(world.totalSnake[0].direction, 'right');
      world.tick();
      assert.equal(world.totalSnake[0].direction, 'right');
    });

    it('"tick" should continue snake movement in the left direction if given "left"', function() {
      var world = new World(400, 400);
      world.totalSnake.unshift(new Snake(200, 200, 20, 20,'left'));
      assert.equal(world.totalSnake[0].direction, 'left');
      world.tick();
      assert.equal(world.totalSnake[0].direction, 'left');
    });

    it('"tick" should continue snake movement in the up direction if given "up"', function() {
      var world = new World(400, 400);
      world.totalSnake.unshift(new Snake(200, 200, 20, 20,'up'));
      assert.equal(world.totalSnake[0].direction, 'up');
      world.tick();
      assert.equal(world.totalSnake[0].direction, 'up');
    });

    it('"tick" should continue snake movement in the down direction if given "down"', function() {
      var world = new World(400, 400);
      world.totalSnake.unshift(new Snake(200, 200, 20, 20,'down'));
      assert.equal(world.totalSnake[0].direction, 'down');
      world.tick();
      assert.equal(world.totalSnake[0].direction, 'down');
    });
  });

  context('create new totalSnake array for movement', function() {
    it('should remove the last object in the totalSnake array', function() {
      var world = new World(400, 400);
      var maxLength = 2;
      world.totalSnake.push(world.snake);
      world.totalSnake.push(world.snake);
      assert.equal(world.totalSnake.length, 3);
      world.removeTail();
      assert.equal(world.totalSnake.length, 2);
    });

    it('totalSnake length should equal the variable maxLength', function() {
      var maxLength = 2;
      var totalSnake = [this.snake, this.snake];
      var totalLength = totalSnake.length;
      assert.equal(totalLength, maxLength);
    });

    it('"moveRight()" should add new snake object to totalSnake array at index 0 incrementing the x value +20px', function() {
      var world = new World(400, 400);
      assert.equal(world.totalSnake[0].x, 200);
      world.moveRight();
      assert.equal(world.totalSnake[0].x, 220);
    });

    it('"moveLeft()" should add new snake object to totalSnake array at index 0 incrementing the x value -20px', function() {
      var world = new World(400, 400);
      assert.equal(world.totalSnake[0].x, 200);
      world.moveLeft();
      assert.equal(world.totalSnake[0].x, 180);
    });

    it('"moveUp()" should add new snake object to totalSnake array at index 0 incrementing the y value -20px', function() {
      var world = new World(400, 400);
      assert.equal(world.totalSnake[0].y, 200);
      world.moveUp();
      assert.equal(world.totalSnake[0].y, 180);
    });

    it('"moveDown()" should add new snake object to totalSnake array at index 0 incrementing the y value +20px', function() {
      var world = new World(400, 400);
      assert.equal(world.totalSnake[0].y, 200);
      world.moveDown();
      assert.equal(world.totalSnake[0].y, 220);
    });
  });

  context('game functionality', function() {
    it('"increaseScore()" should increase the score by 20 when the snake collides with food', function() {
      this.score = 0;
      var score = this.score;
      score += 20;
      assert.equal(score, 20);
    });

    it('"changeLevel()" should increase the level by 1 when the snake score increments by 100', function() {
      var level = this.score % 100 === 0;
      level ++;
      assert.equal(level, 2);
    });
  });
});
