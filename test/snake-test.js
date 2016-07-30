const assert = require('chai').assert;

const Snake = require('../lib/snake');

const Food = require('../lib/food');

describe('Snake', function() {
  context('assigned attributes', function() {
    it('should create a snake', function () {
      var snake = new Snake();
      assert.isObject(snake);
    });

    it('should take all these attributes', function () {
      var snake = new Snake(40, 40, 20, 20, 'right');
      assert.equal(snake.x, 40);
      assert.equal(snake.y, 40);
      assert.equal(snake.height, 20);
      assert.equal(snake.width, 20);
      assert.equal(snake.direction, 'right');
    });
  });

  context('snake movement', function() {
    it('"moveRight()" should increment the x by 1', function() {
      var snake = new Snake(40, 40, 20, 20);
      snake.moveRight();
      assert.equal(snake.x, 41);
    });

    it('"moveRight()" should stop snake movement when x reaches 380px', function() {
      var snake = new Snake(400, 0, 20, 20);
      snake.moveRight();
      assert.equal(snake.x, 380);
    });

    it('"moveRight()" should move the snake in the right direction', function() {
      var snake = new Snake(40, 40, 20, 20);
      snake.moveRight();
      assert.equal(snake.direction, 'right');
    });

    it('"moveLeft()" should decrement the x property by 1', function() {
      var snake = new Snake(40, 40, 20, 20);
      snake.moveLeft();
      assert.equal(snake.x, 39);
    });

    it('"moveLeft()" should stop snake movement when x reaches 0px', function() {
      var snake = new Snake(-200, 0, 20, 20);
      snake.moveLeft();
      assert.equal(snake.x, 0);
    });

    it('"moveLeft()" should move the snake in the left direction', function() {
      var snake = new Snake(40, 40, 20, 20);
      snake.moveLeft();
      assert.equal(snake.direction, 'left');
    });

    it('"moveUp()" should decrement the y property by 1', function() {
      var snake = new Snake(40, 40, 20, 20);
      snake.moveUp();
      assert.equal(snake.y, 39);
    });

    it('"moveUp()" should stop snake movement when y reaches 0px', function() {
      var snake = new Snake(200, -100, 20, 20);
      snake.moveUp();
      assert.equal(snake.y, 0);
    });

    it('"moveUp()" should move the snake in the up direction', function() {
      var snake = new Snake(40, 40, 20, 20);
      snake.moveUp();
      assert.equal(snake.direction, 'up');
    });

    it('"moveDown()" should increase the y property by 1', function() {
      var snake = new Snake(40, 40, 20, 20);
      snake.moveDown();
      assert.equal(snake.y, 41);
    });

    it('"moveDown()" should stop snake movement when y reaches 380px', function() {
      var snake = new Snake(200, 400, 20, 20);
      snake.moveDown();
      assert.equal(snake.y, 380);
    });

    it('"moveDown()" should move the snake in the down direction', function() {
      var snake = new Snake(40, 40, 20, 20);
      snake.moveDown();
      assert.equal(snake.direction, 'down');
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
