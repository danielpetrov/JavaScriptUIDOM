var Game = (function () {
    'use strict';
    //I did some refacturing and switched to reavealing module pattern instead

    var stage,
        gameInterval,
        player,
        infoBox,
        GAME_SPEED = 10,
        enemyInterval,
        ENEMY_LEVEL1_HEIGHT;

    function init() {
        gameInitialLoad.addEventListeners();
        gameInitialLoad.context.width = window.innerWidth;
        gameInitialLoad.context.height = window.innerHeight;

        stage = new Background();
        stage.init();

        gameInitialLoad.playerManager = new PlayerManager();
        player = new Player();
        gameInitialLoad.playerManager.spawn(player);

        gameInitialLoad.infoBoxManager = new InfoBoxManager();
        infoBox = new InfoBox(player);
        gameInitialLoad.infoBoxManager.spawn(infoBox);

        gameInitialLoad.enemyManager = new EnemyManager();

        enemyInterval = setInterval(function(){
            gameInitialLoad.enemyManager.spawn(new EnemyBuilder(Math.random() * (Game.getContextValue('height') - ENEMY_LEVEL1_HEIGHT)));
        }, 2000);

        Game.start();
    }

    function start() {
        gameInterval = setInterval(function () {
            gameInitialLoad.mainLoop(player, infoBox);
            stage.move();
        }, GAME_SPEED);
    }

    function pause() {
        clearInterval(gameInterval);
        clearInterval(enemyInterval);
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