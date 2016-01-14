var Game = (function() {
    'use strict';
    //I did some refacturing and switched to reavealing module pattern instead

    var stage,
        gameInterval,
        player;

    function init() {
        gameInitialLoad.addEventListeners();
        gameInitialLoad.context.width = window.innerWidth;
        gameInitialLoad.context.height = window.innerHeight;

        stage = new Stage();
        stage.init();

        gameInitialLoad.playerManager = new PlayerManager();
        player = new Player();
        gameInitialLoad.playerManager.spawn(player);

        Game.start();
    }

    function start() {
        gameInterval = setInterval(function(){
            gameInitialLoad.mainLoop();
            stage.moveStage();
        }, 10);
    }

    function pause() {
        clearInterval(gameInterval);
    }

    function getContextValue(key) {
        return gameInitialLoad.context[key];
    }

    return {
        StartGame: init,
        start: start,
        pause: pause,
        getContextValue: getContextValue
    };

})();