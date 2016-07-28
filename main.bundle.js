/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	const canvas = document.getElementById("game-canvas");

	const context = canvas.getContext('2d');

	const Snake = __webpack_require__(1);

	const World = __webpack_require__(2);

	const Food = __webpack_require__(3);

	var snake = new Snake(0, 0, 20, 20);
	var food = new Food(100, 100, 20, 20);
	var world = new World(400, 400);

	function renderSnake() {
	  context.fillStyle = "blue";
	  context.fillRect(snake.x, snake.y, snake.width, snake.height);
	}
	renderSnake();

	function renderFood() {
	  context.fillStyle = "green";
	  // food.foodRandomPlace();
	  context.fillRect(food.x, food.y, food.width, food.height);
	}
	renderFood();

	setInterval(function () {
	  context.clearRect(0, 0, world.width, world.height);
	  renderSnake();
	  renderFood();
	}, 60);

	document.addEventListener('keydown', function (e) {
	  e.preventDefault();
	  if (e.keyCode === 39) {
	    snake.moveRight();
	  }
	  if (e.keyCode === 37) {
	    snake.moveLeft();
	  }
	  if (e.keyCode === 38) {
	    snake.moveUp();
	  }
	  if (e.keyCode === 40) {
	    snake.moveDown();
	  }
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = Snake;

	function Snake(x, y, width, height, world) {
	  this.x = x;
	  this.y = y;
	  this.width = width;
	  this.height = height;
	  this.world = world;
	}

	//move snake
	Snake.prototype.moveRight = function () {
	  this.x = this.x + 1;
	};

	Snake.prototype.moveLeft = function () {
	  this.x = this.x - 1;
	};

	Snake.prototype.moveUp = function () {
	  this.y = this.y - 1;
	};

	Snake.prototype.moveDown = function () {
	  this.y = this.y + 1;
	};

	//snake grow
	Snake.prototype.grow = function () {
	  this.width = this.width + 2;
	};

	//snake array
	var GrowSnake = {
	  snakeArray: []
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = World;

	function World(width, height) {
	  this.width = width;
	  this.height = height;
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = Food;

	function Food(x, y, width, height) {
	  this.x = x;
	  this.y = y;
	  this.width = width;
	  this.height = height;
	}

	Food.prototype.foodRandomPlace = function () {
	  this.x = Math.floor(Math.random() * canvas.width);
	  this.y = Math.floor(Math.random() * canvas.height);
	};

/***/ }
/******/ ]);