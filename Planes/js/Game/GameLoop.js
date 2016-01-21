var gameLoop = (function () {
    'use strict';

    var hasShot = false,
        ONE_SECOND_TIMEOUT = 1000;

    function mainLoop(subscribers) {

        gameLoop.playerManager.publish();
        gameLoop.infoBoxManager.publish();
        gameLoop.playerManager.bulletManager.publish();

        if(gameLoop.playerManager.isShooting){
            if (!hasShot) {
                subscribers.player.addBullets(-1, gameLoop.playerManager.bulletType);
                hasShot = true;
                setTimeout(function () {
                    hasShot = false;
                }, ONE_SECOND_TIMEOUT / gameLoop.playerManager.fireSpeed);
            }
        }

        gameLoop.enemyManager.publish(subscribers.bullet, subscribers.player);
        subscribers.infoBox.changeInfo(subscribers.player);
    }

    return {
        mainLoop: mainLoop
    }
})();
