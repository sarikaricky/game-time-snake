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

  context('detect collisions', function() {
    it('should be able to tell if the snake is colliding with food', function() {
      var world = new World(400, 400);
      var snake = new Snake(10, 10, 20, 20);
      var food = new Food(10, 10, 20, 20);

      assert.equal(true, world.isSnakeCollidingWithFood(food));
    });
  });
});
