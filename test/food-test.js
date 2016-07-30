const assert = require('chai').assert;

const Food = require('../lib/food');

describe('Food', function() {
  context('assigned attributes', function() {
    it('should create a piece of food', function () {
      var food = new Food();
      assert.isObject(food);
    });

    it('should have a random x and y', function () {
      var food = new Food(30, 45);
      assert.equal(food.x, 30);
      assert.equal(food.y, 45);
    });

    it('should have a width and height', function () {
      var food = new Food(30, 45, 20, 20);
      assert.equal(food.height, 20);
      assert.equal(food.width, 20);
    });
  });

  context('food boundaries', function() {
    it('should stop the x value of food placement from exceeding 0px and 380px', function () {
      var food = new Food(30, 45, 20, 20);
      assert.equal(food.x, 30);
    });

    it('should stop the y value of food placement from exceeding 0px and 380px', function () {
      var food = new Food(30, 45, 20, 20);
      assert.equal(food.y, 45);
    });
  });
});
