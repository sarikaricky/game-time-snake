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

  context('assigned prototypes', function() {
    it('should have the snake property start as an empty array', function() {
    var world = new World(400, 400);
    assert.isArray(world.snake);
    assert.deepEqual(world.snake, []);
    });

    it('should have the food property start as an empty array', function() {
    var world = new World(400, 400);
    assert.isArray(world.food);
    assert.deepEqual(world.food, []);
    });

    it('should be able to tell if the Snake is colliding with food', function() {
      var world = new World(400, 400);
      var snake = new Snake(10, 10, 30, 30);
      var food = new Food(10, 10, 20, 20);

      world.addSnake(snake);
      world.addFood(food);
      assert.equal(true, world.isSnakeColliding(food));
    });
  });
});
