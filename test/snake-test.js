const assert = require('chai').assert;
const Snake = require('../lib/snake');

describe('Snake', function() {
  context('assigned attributes', function() {
    it('should create a snake', function() {
      var snake = new Snake();
      assert.isObject(snake);
    });

    it('snake should have an x value', function() {
      var snake = new Snake(200, 200, 20, 20, 'right');
      assert.equal(snake.x, 200);
    });

    it('snake should have a y value', function() {
      var snake = new Snake(200, 200, 20, 20, 'right');
      assert.equal(snake.y, 200);
    });

    it('snake should have a height', function() {
      var snake = new Snake(200, 200, 20, 20, 'right');
      assert.equal(snake.height, 20);
    });

    it('snake should have a width', function() {
      var snake = new Snake(200, 200, 20, 20, 'right');
      assert.equal(snake.width, 20);
    });

    it('snake should have a direction', function() {
      var snake = new Snake(200, 200, 20, 20, 'right');
      assert.equal(snake.direction, 'right');
    });
  });
});
