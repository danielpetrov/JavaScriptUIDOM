var BulletManager = (function (parent) {
    'use strict';

    BulletManager.prototype = Object.create(parent.prototype);

    function BulletManager() {
        parent.call(this);
    }

    BulletManager.prototype.onGameLoop = function (bullet) {
        bullet.move();
    };

    return BulletManager;
})(Manager);

