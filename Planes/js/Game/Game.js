var Game = (function () {
    'use strict';

    var stage,
        gameInterval,
        player,
        infoBox,
        GAME_SPEED = 10,
        enemyInterval,
        ENEMY_LEVEL1_HEIGHT = 128,
        BOSS_LEVEL1_HEIGHT = 194;

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

        //level1
        enemyInterval = setInterval(function(){
            gameInitialLoad.enemyManager.spawn(
                new EnemyBuilder(Math.random() * (Game.getContextValue('height') - ENEMY_LEVEL1_HEIGHT)
                    ,ENEMY_TYPE.ENEMY_TYPE_LEVEL_1));
        }, 1900);

        setTimeout(function(){
            gameInitialLoad.enemyManager.spawn(
                new EnemyBuilder(Math.random() * (Game.getContextValue('height') - BOSS_LEVEL1_HEIGHT)
                    ,ENEMY_TYPE.ENEMY_TYPE_BOSS_LEVEL_1));
        }, 20000);

        Game.start();
    }

    function start() {
        gameInterval = setInterval(function () {
            gameInitialLoad.mainLoop(infoBox, player);
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