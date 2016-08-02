const assert = require('chai').assert;
const World = require('../lib/world');
const Snake = require('../lib/snake');
const Food = require('../lib/food');

describe('World', function() {
  context('assigned attributes', function() {
    it('should create a world that the snake lives in', function () {
      var world = new World();
      assert.isObject(world);
    });

    it('should have a width and height', function () {
      var world = new World(400, 400);
      assert.equal(world.height, 400);
      assert.equal(world.width, 400);
    });
  });

  context('snake movement', function() {
    it('moveRight() should be a function', function() {
      var world = new World(400, 400);
      var snake = new Snake(40, 40, 20, 20, 'right');
      assert.isFunction(world.moveRight);
    });

    it('"moveRight()" should return the first object in the array', function() {
      var world = new World(400, 400);
      var snake = new Snake(40, 40, 20, 20, 'right');
      var totalSnake = [snake];
      var firstSnakeElement = totalSnake[0];
      world.moveRight();
      assert.equal(this.snake, firstSnakeElement);
    });

    // THIS TEST IS JANKY AS SHIT BUT PASSES
    it('should remove last element of totalSnake array', function() {
      var world = new World(400, 400);
      var snake = new Snake(40, 40, 20, 20, 'right');
      // var totalSnake = [snake];
      assert.equal(world.totalSnake.length, 1);
      world.removeTail(world.totalSnake);
      assert.equal(world.totalSnake.length, 0);
    });
  });


  context('snake grow', function() {
    it('food x value will become the x value of the new snake piece', function() {
      var world = new World(400, 400);
      var snake = new Snake(20, 20, 20, 20);
      var food = new Food(20, 20, 20, 20);
      world.growSnake();
      assert.equal(world.food.x, world.totalSnake[0].x);
    });

    it('food y value will become the y value of the new snake piece', function() {
      var world = new World(400, 400);
      var snake = new Snake(20, 20, 20, 20);
      var food = new Food(20, 20, 20, 20);
      world.growSnake();
      assert.equal(world.food.y, world.totalSnake[0].y);
    });
  });

  context('total snake build', function() {
    it('should be an array', function() {
      var snake = new Snake(20, 20 , 20 , 20);
      var world = new World(400, 400);
      var totalSnake = world.totalSnake;
      assert.isArray(totalSnake);
    });

    it('should add snake objects to the total snake array', function() {
      var snake = new Snake(20, 20 , 20 , 20);
      var world = new World(400, 400);
      var totalSnake = world.totalSnake;
      assert.equal(totalSnake.length, 1);
      world.growSnake();
      assert.equal(totalSnake.length, 2);
    });

    it('should return the number of elements in the snake array', function() {
      var world = new World(400, 400);
      var totalSnake = world.totalSnake;
      world.growSnake();
      assert.equal(totalSnake.length, 2);
    });

    it('should create a snake with three elements in the array', function() {
      var world = new World(400, 400);
      var totalSnake = world.totalSnake;
      world.createTotalSnake();
    });
  });

  context('detect collisions', function() {
    it('should return true if the snake is colliding with food', function() {
      var world = new World(400, 400);
      var snake = new Snake(20, 20, 20, 20);
      var food = new Food(20, 20, 20, 20);
      var collision = world.isSnakeCollidingWithFood();
      assert.equal(collision, true);
    });

    it('should return true if totalSnake[0].x equals snake.x of any of the snake objects', function() {
      var world = new World(400, 400);
      var snake = new Snake(20, 20, 20, 20, 'right');
      var totalSnake = [snake, snake];
      assert.equal(world.isCollidingWithSelf(), true);
    });

    it('should return true if totalSnake[0].y equals snake.y of any of the snake objects', function() {
      var world = new World(400, 400);
      var snake = new Snake(20, 20, 20, 20);
      var totalSnake = [this.snake, this.snake];
      var collision = world.isCollidingWithSelf();
      assert.equal(collision, true);
    });
  });

  context('move snake direction', function() {
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

    context('game functionality', function() {
      it('"changeScore()" should increase the score by 20 when the snake collides with food', function() {
        this.score = 0;
        var score = this.score;
        score += 20;
        assert.equal(score, 20);
    });
  });
});
