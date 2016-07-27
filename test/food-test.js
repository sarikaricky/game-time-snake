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
      var food = new Food(30, 45, 30, 30);
      assert.equal(food.height, 30);
      assert.equal(food.width, 30);
    });
  });
});
