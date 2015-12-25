var Game = (function() {
	
	var stage;
	
	var Game = {
		mainLoop: function() {
			this.planeManager.publish();
		},
		planeManager: null,
		bulletManager: null,
		init: function() {
			window.onscroll = function() {
				return false;
			};
			window.addEventListener('contextmenu', function(e) {
				e.preventDefault();
			}, false);
			
			var _this = this;
			document.addEventListener('keydown', function(e) {
				_this.planeManager.keyboardListener(e);
			});
			document.addEventListener('keyup', function(e) {
				_this.planeManager.keyboardListener(e);
			});
		},
		context: {
			width: null,
			height: null
		}
	}
	
	var gameInterval;
	
	return {
		init: function() {
			stage = new Stage();
			stage.init();
			Game.context.width = window.innerWidth;
			Game.context.height = window.innerHeight;
			Game.bulletManager = new BulletManager();
			Game.planeManager = new PlaneManager(Game.bulletManager);
			
			var plane = new Plane();
			Game.planeManager.spawn(plane);
			Game.init();
			this.start();
		},
		start: function() {
			gameInterval = setInterval(function(){
				Game.mainLoop();
                stage.moveStage();
			}, 10);
		},
		pause: function() {
			clearInterval(gameInterval);
		},
		getContextValue: function(key) {
			return Game.context[key];
		}
	};
    
})();