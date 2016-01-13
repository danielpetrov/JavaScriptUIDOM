var Game = (function() {
    'use strict';
    //I did some refacturing and switched to reavealing module pattern instead

    var stage,
        gameInterval,
        GameInit = {
            mainLoop: function() {
                this.planeManager.publish();
            },
            planeManager: null,
            addEventListeners: function() {
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
    };

    function init() {
        stage = new Stage();
        stage.init();

        GameInit.context.width = window.innerWidth;
        GameInit.context.height = window.innerHeight;
        GameInit.planeManager = new PlaneManager();
        GameInit.planeManager.spawn(new Plane());
        GameInit.addEventListeners();

        Game.start();
    }

    function start() {
        gameInterval = setInterval(function(){
            GameInit.mainLoop();
            stage.moveStage();
        }, 10);
    }

    function pause() {
        clearInterval(gameInterval);
    }

    function getContextValue(key) {
        return GameInit.context[key];
    }

    return {
        init: init,
        start: start,
        pause: pause,
        getContextValue: getContextValue
    };

})();