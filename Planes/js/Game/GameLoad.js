var gameInitialLoad = (function(){
    'use strict';

    function mainLoop() {
        gameInitialLoad.playerManager.publish();
        gameInitialLoad.playerManager.bulletManager.publish();
    }

    function addEventListeners() {
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
    }

    return {
        mainLoop : mainLoop,
        addEventListeners: addEventListeners,
        playerManager: null,
        bulletManager: null,
        context: {
            width: null,
            height: null
        }
    }
})();
