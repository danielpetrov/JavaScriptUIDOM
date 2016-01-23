var BulletManager = (function (parent) {
    'use strict';

    BulletManager.prototype = Object.create(parent.prototype);

    function BulletManager() {
        parent.call(this);
    }

    BulletManager.prototype.onGameLoop = function (bullet) {
        bullet.move(bullet.isEnemy);
    };

    BulletManager.prototype.publish = function () {
        for (var i = 0; i < this.subscribers.length; i++) {
            this.onGameLoop(this.subscribers[i]);

            if(this.subscribers[i].positionLeft > 1400){
                document.body.removeChild(this.subscribers[i].dom);
                this.subscribers.splice(i, 1);
            }
         }
    };

    return BulletManager;
})(Manager);

