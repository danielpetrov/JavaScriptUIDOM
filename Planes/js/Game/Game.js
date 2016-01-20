var Game = (function () {
    'use strict';
    //I did some refacturing and switched to reavealing module pattern instead

    var stage,
        gameInterval,
        player,
        infoBox,
        GAME_SPEED = 10;

    function init() {
        gameInitialLoad.addEventListeners();
        gameInitialLoad.context.width = window.innerWidth;
        gameInitialLoad.context.height = window.innerHeight;

        stage = new Stage();
        stage.init();

        gameInitialLoad.playerManager = new PlayerManager();
        player = new Player();
        gameInitialLoad.playerManager.spawn(player);

        gameInitialLoad.infoBoxManager = new InfoBoxManager();
        infoBox = new InfoBox(player);
        gameInitialLoad.infoBoxManager.spawn(infoBox);

        Game.start();
    }

    function start() {
        gameInterval = setInterval(function () {
            gameInitialLoad.mainLoop(player, infoBox);
            stage.moveStage();
        }, GAME_SPEED);
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