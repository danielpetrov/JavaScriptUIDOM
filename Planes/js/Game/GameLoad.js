var gameInitialLoad = (function () {
    'use strict';
    var hasShot = false,
        ONE_SECOND_TIMEOUT = 1000;

    function mainLoop(player, infoBox) {
        gameInitialLoad.playerManager.publish();

        gameInitialLoad.infoBoxManager.publish();

        gameInitialLoad.playerManager.bulletManager.publish(gameInitialLoad.enemyManager.subscribers);

        if(gameInitialLoad.playerManager.isShooting){
            if (!hasShot) {
                player.addBullets(-1, gameInitialLoad.playerManager.bulletType);
                infoBox.changeInfo(player);
                hasShot = true;
                setTimeout(function () {
                    hasShot = false;
                }, ONE_SECOND_TIMEOUT / gameInitialLoad.playerManager.fireSpeed);
            }
        }

        gameInitialLoad.enemyManager.publish(gameInitialLoad.playerManager.bulletManager);
    }

    function addEventListeners() {
        var _this = this;

        window.onscroll = function () {
            return false;
        };
        document.addEventListener('keydown', function (e) {
            _this.playerManager.keyboardListener(e);
        });
        document.addEventListener('keyup', function (e) {
            _this.playerManager.keyboardListener(e);
        });
    }

    return {
        mainLoop: mainLoop,
        addEventListeners: addEventListeners,
        context: {
            width: null,
            height: null
        }
    }
})();
