const assert = require('chai').assert;

const World = require('../lib/world');

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
});
