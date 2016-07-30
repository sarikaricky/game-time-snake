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

  context('total snake build', function() {
    it('should be an array', function() {
      var snake = new Snake(20, 20 , 20 , 20);
      var world = new World(400, 400);
      var totalSnake = world.totalSnake;
      assert.isArray(totalSnake);
      assert.deepEqual(totalSnake, []);
    });

    it('should add snake objects to the total snake array', function() {
      var snake = new Snake(20, 20 , 20 , 20);
      var world = new World(400, 400);
      var totalSnake = world.totalSnake;
      assert.equal(totalSnake.length, 1);
      world.growSnake();
      assert.equal(totalSnake.length, 2);
    });
  });

  // context('collision testing', function() {
  //   it('Prototype, "isSnakeCollidingWithSegments" should return true if segments and head collide', function(snake) {
  //     var snake = new Snake(20, 20 , 20 , 20);
  //     var head = snake.head(20, 20, 20, 20);
  //     var tail = snake.tail(20, 20, 20, 20);
  //     snake.isCollidingWithSegments();
  //     assert.equal(snake.head, snake.tail);
  //   });
  // });

  context('detect collisions', function() {
    it('should return true if the snake is colliding with food', function() {
      var world = new World(400, 400);
      var snake = new Snake(20, 20, 20, 20);
      var food = new Food(20, 20, 20, 20);
      var collision = world.isSnakeCollidingWithFood();
      assert.equal(collision, true);
    });
  });

  context('move snake direction', function() {
    it('"rightArrow()" should move the snake right in the world', function() {
      var world = new World(400, 400);
      assert.isFunction(world.rightArrow);
    });

    it.skip('should move the snake right in with the rightArrow()', function() {
      var world = new World(400, 400);
      var snake = new Snake(20, 20, 20, 20);
      world.rightArrow();
      assert.equal(snake.x, 40);
    });

    it('"leftArrow()" should move the snake left in the world', function() {
      var world = new World(400, 400);
      assert.isFunction(world.leftArrow);
    });

    it.skip('should move the snake left with the leftArrow()', function() {
      var world = new World(400, 400);
      var snake = new Snake(20, 20, 20, 20);
      world.leftArrow();
      assert.equal(snake.x, 0);
    });

    it('"upArrow()" should move the snake up in the world', function() {
      var world = new World(400, 400);
      assert.isFunction(world.upArrow);
    });

    it.skip('should move the snake up with the upArrow()', function() {
      var world = new World(400, 400);
      var snake = new Snake(20, 20, 20, 20);
      world.upArrow();
      assert.equal(snake.y, 0);
    });

    it('"downArrow()" should move the snake down in the world', function() {
      var world = new World(400, 400);
      assert.isFunction(world.downArrow);
    });

    it.skip('should move the snake down with the downArrow()', function() {
      var world = new World(400, 400);
      var snake = new Snake(20, 20, 20, 20);
      world.downArrow();
      assert.equal(snake.y, 40);
    });
  });
});
