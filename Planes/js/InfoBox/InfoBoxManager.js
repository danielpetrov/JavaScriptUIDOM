var InfoBoxManager = (function (parent) {
    'use strict';

    InfoBoxManager.prototype = Object.create(parent.prototype);

    function InfoBoxManager() {
        parent.call(this);
    }

    InfoBoxManager.prototype.onGameLoop = function (obj) {
        obj.changeInnerContent();
    };

    return InfoBoxManager;
})(Manager);

