const assert = require('chai').assert;

const Snake = require('../lib/snake');

const Food = require('../lib/food');

describe('Snake', function() {
  context('assigned attributes', function() {
    it('should create a snake', function () {
      var snake = new Snake();
      assert.isObject(snake);
    });

    // it('snake segments should be an array', function () {
    //   assert(Array.isArray(segments));
    // });

    it('should take all these attributes', function () {
      var snake = new Snake(40, 40, 20, 20);
      assert.equal(snake.x, 40);
      assert.equal(snake.y, 40);
      assert.equal(snake.height, 20);
      assert.equal(snake.width, 20);
    });
  });

  context('snake movement', function() {
    it('"moveRight()" should increment the "x" property by 20px', function() {
      var snake = new Snake(40, 40, 20, 20);
      snake.moveRight();
      assert.equal(snake.x, 60);
    });

    it('"moveRight()" should stop movement when x reaches 380px', function() {
      var snake = new Snake(400, 0, 20, 20);
      snake.moveRight();
      assert.equal(snake.x, 380);
    });

    it('"moveLeft()" should decrement the "x" property by 20px', function() {
      var snake = new Snake(40, 40, 20, 20);
      snake.moveLeft();
      assert.equal(snake.x, 20);
    });

    it('"moveLeft()" should stop movement when x reaches 0px', function() {
      var snake = new Snake(-200, 0, 20, 20);
      snake.moveLeft();
      assert.equal(snake.x, 0);
    });

    it('"moveUp()" should decrement the "y" property by 20px', function() {
      var snake = new Snake(40, 40, 20, 20);
      snake.moveUp();
      assert.equal(snake.y, 20);
    });

    it('"moveUp()" should stop movement when y reaches 0px', function() {
      var snake = new Snake(200, -100, 20, 20);
      snake.moveUp();
      assert.equal(snake.y, 0);
    });

    it('"moveDown()" should increase the "y" property by 20px', function() {
      var snake = new Snake(40, 40, 20, 20);
      snake.moveDown();
      assert.equal(snake.y, 60);
    });

    it('"moveDown()" should stop movement when y reaches 380px', function() {
      var snake = new Snake(200, 400, 20, 20);
      snake.moveDown();
      assert.equal(snake.y, 380);
    });
  });

  context('snake collisions', function() {
    it('should return true if the x value of snake is greater than 380px', function() {
      var snake = new Snake(400, 20, 20, 20);
      var colliding = snake.isSnakeCollidingWithWall();
      assert.isTrue(colliding, true);
    });

    it('should return true if the x value of the snake is less than 0px', function() {
      var snake = new Snake(-20, 20, 20, 20);
      var colliding = snake.isSnakeCollidingWithWall();
      assert.isTrue(colliding, true);
    });

    it('should return true if the y value of the snake is greater than 380px', function() {
      var snake = new Snake(20, 400, 20, 20);
      var colliding = snake.isSnakeCollidingWithWall();
      assert.isTrue(colliding, true);
    });

    it('should return true if the y value of the snake is less than 0px', function() {
      var snake = new Snake(20, -20, 20, 20);
      var colliding = snake.isSnakeCollidingWithWall();
      assert.isTrue(colliding, true);
    });

    it('should return true if the x value of the snake is equal to the x value of the food', function() {
      var snake = new Snake(20, 20, 20, 20);
      var food = new Food(20, 20, 20, 20);
      assert.equal(true, snake.isSnakeCollidingWithFood(food));
    });

    it('should return true if the y value of the snake is equal to the y value of the food', function() {
      var snake = new Snake(20, 20, 20, 20);
      var food = new Food(20, 20, 20, 20);
      assert.equal(true, snake.isSnakeCollidingWithFood(food));
    });
  });
});
