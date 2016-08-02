const assert = require('chai').assert;
const Food = require('../lib/food');

describe('Food', function() {
  context('assigned attributes', function() {
    it('should create a piece of food', function () {
      var food = new Food();
      assert.isObject(food);
    });

    it('food should have a height', function () {
      var food = new Food(30, 45, 20, 20);
      assert.equal(food.height, 20);
    });

    it('food should have a width', function () {
      var food = new Food(30, 45, 20, 20);
      assert.equal(food.width, 20);
    });
  });
});
