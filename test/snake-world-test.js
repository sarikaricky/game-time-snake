const assert = require('chai').assert;

const World = require('../lib/world');

const Snake = require('../lib/snake');

const Food = require('../lib/food');


describe('The snake world', function() {
  context('move snake direction', function() {
    it('"rightArrow()" should move the snake right in the world', function() {
      var world = new World(400, 400);
      assert.isFunction(world.rightArrow);
      });

    it('should move the snake right with the rightArrow()', function() {
      var world = new World(400, 400);
      var snake = new Snake(20, 20, 20, 20);
      world.rightArrow();
      assert.equal(snake.x, 40);
    });

    it('"leftArrow()" should move the snake left in the world', function() {
      var world = new World(400, 400);
      assert.isFunction(world.leftArrow);
    });

    it('should move the snake left with the leftArrow()', function() {
      var world = new World(400, 400);
      var snake = new Snake(20, 20, 20, 20);
      world.leftArrow();
      assert.equal(snake.x, 0);
    });

    it('"upArrow()" should move the snake up in the world', function() {
      var world = new World(400, 400);
      assert.isFunction(world.upArrow);
    });

    it('should move the snake up with the upArrow()', function() {
      var world = new World(400, 400);
      var snake = new Snake(20, 20, 20, 20);
      world.upArrow();
      assert.equal(snake.y, 0);
    });

    it('"downArrow()" should move the snake down in the world', function() {
      var world = new World(400, 400);
      assert.isFunction(world.downArrow);
    });

    it('should move the snake down with the downArrow()', function() {
      var world = new World(400, 400);
      var snake = new Snake(20, 20, 20, 20);
      world.downArrow();
      assert.equal(snake.y, 40);
    });
  });
});
