var Game = (function () {
    'use strict';

    var stage,
        gameInterval,
        player,
        infoBox,
        GAME_SPEED = 10,
        enemyInterval,
        ENEMY_LEVEL1_HEIGHT = 128,
        BOSS_LEVEL1_HEIGHT = 194,
        subscribers = {
            player: null,
            playerBullet: null,
            enemy: null,
            enemyBullets: null,
            infoBox: null
        },
        context = {
            width: null,
            height: null
         };

    function init() {
        addEventListeners(gameLoop);

        context.width = window.innerWidth;
        context.height = window.innerHeight;

        stage = new Background();
        stage.init();

        gameLoop.playerManager = new PlayerManager();
        player = new Player();
        gameLoop.playerManager.spawn(player);
        subscribers.player = player;
        subscribers.playerBullets = gameLoop.playerManager.bulletManager.subscribers;

        gameLoop.infoBoxManager = new InfoBoxManager();
        infoBox = new InfoBox(player);
        gameLoop.infoBoxManager.spawn(infoBox);
        subscribers.infoBox = infoBox;

        gameLoop.enemyManager = new EnemyManager();
        subscribers.enemy = gameLoop.enemyManager.subscribers;
        subscribers.enemyBullets = gameLoop.enemyManager.bulletManager.subscribers;

        //level1
        enemyInterval = setInterval(function(){
            gameLoop.enemyManager.spawn(
                new EnemyBuilder(Math.random() * (Game.getContextValue('height') - ENEMY_LEVEL1_HEIGHT)
                    ,ENEMY_TYPE.ENEMY_TYPE_LEVEL_1));
        }, 1600);

        setTimeout(function(){
            gameLoop.enemyManager.spawn(
                new EnemyBuilder(Math.random() * (Game.getContextValue('height') - BOSS_LEVEL1_HEIGHT)
                    ,ENEMY_TYPE.ENEMY_TYPE_BOSS_LEVEL_1));
        }, 20000);

        Game.start();
    }

    function start() {
        gameInterval = setInterval(function () {
            gameLoop.mainLoop(subscribers);
            stage.move();
        }, GAME_SPEED);
    }

    function pause() {
        clearInterval(gameInterval);
        clearInterval(enemyInterval);
    }

    function getContextValue(key) {
        return context[key];
    }

    function addEventListeners(controller) {
        window.onscroll = function () {
            return false;
        };
        document.addEventListener('keydown', function (e) {
            controller.playerManager.keyboardListener(e);
        });
        document.addEventListener('keyup', function (e) {
            controller.playerManager.keyboardListener(e);
        });
    }

    return {
        StartGame: init,
        start: start,
        pause: pause,
        getContextValue: getContextValue
    };

})();