var Game = (function() {
    'use strict';
    //I did some refacturing and switched to reavealing module pattern instead

    var stage,
        gameInterval,
        player,
        GameInit = {
            mainLoop: function() {
                //this.bulletManager.publish();
                this.bulletManager.move();
                this.playerManager.publish();
            },
            playerManager: null,
            bulletManager: null,
            addEventListeners: function() {
                window.onscroll = function() {
                    return false;
                };

                var _this = this;
                document.addEventListener('keydown', function(e) {
                    _this.playerManager.keyboardListener(e);
                });
                document.addEventListener('keyup', function(e) {
                    _this.playerManager.keyboardListener(e);
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


        GameInit.bulletManager = new BulletManager();
        GameInit.playerManager = new PlayerManager();

        player = new Player();
        GameInit.playerManager.spawn(player);
        //GameInit.bulletManager.spawn(new Bullet(100, 100, 'orange'));
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