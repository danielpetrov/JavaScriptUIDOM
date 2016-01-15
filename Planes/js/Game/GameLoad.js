var gameInitialLoad = (function(){
    'use strict';

    function mainLoop() {
        gameInitialLoad.playerManager.publish();
        gameInitialLoad.playerManager.bulletManager.publish();
    }

    function addEventListeners() {
        var _this = this;

        window.onscroll = function() {
            return false;
        };
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
        context: {
            width: null,
            height: null
        }
    }
})();
