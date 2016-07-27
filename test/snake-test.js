const assert = require('chai').assert;

const Snake = require('../lib/snake');

describe('Snake', function() {
  context('assigned attributes', function() {
    it('should create a snake', function () {
      var snake = new Snake();
      assert.isObject(snake);
    });

    it('should take all these attributes', function () {
      var snake = new Snake(10, 10, 30, 30);
      assert.equal(snake.x, 10);
      assert.equal(snake.y, 10);
      assert.equal(snake.height, 30);
      assert.equal(snake.width, 30);
    });

    it('"moveRight()" should increment the "x" property by 1', function() {
      var snake = new Snake(10, 10);
      snake.moveRight();
      assert.equal(snake.x, 11);
    });

    it('"moveLeft()" should decrement the "x" property by 1', function() {
      var snake = new Snake(10, 10);
      snake.moveLeft();
      assert.equal(snake.x, 9);
    });

    it('"moveUp()" should decrement the "y" property by 1', function() {
      var snake = new Snake(10, 10);
      snake.moveUp();
      assert.equal(snake.y, 9);
    });

    it('"moveDown()" should increase the "y" property by 1', function() {
      var snake = new Snake(10, 10);
      snake.moveDown();
      assert.equal(snake.y, 11);
    });

    it('"grow()" should increase the width property by 2', function() {
      var snake = new Snake(10, 10, 30);
      snake.grow();
      assert.equal(snake.width, 32);
    });

    it('should be an array', function() {
      assert.equal([], 0);
    });
  });
});
