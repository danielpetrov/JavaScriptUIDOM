var BulletManager = (function (parent) {
    'use strict';

    BulletManager.prototype = Object.create(parent.prototype);

    function BulletManager() {
        parent.call(this);
    }

    BulletManager.prototype.onGameLoop = function (bullet) {
        bullet.move();
    };

    BulletManager.prototype.publish = function (enemy) {
        for (var i = 0; i < this.subscribers.length; i++) {
            this.onGameLoop(this.subscribers[i]);

            if(this.subscribers[i].positionLeft > 1400){
                document.body.removeChild(this.subscribers[i].dom);
                this.subscribers.splice(i, 1);
            }

            for(var enemy in enemy.subscribers){
                if( (this.subscribers[i].positionTop > enemy.subscribers[i].positionTop)
                    && (this.subscribers[i].positionTop < (enemy.subscribers[i].positionTop + enemy.subscribers[i].planeHeight))
                    && (this.subscribers[i].positionLeft > enemy.subscribers[i].positionLeft)){

                    document.body.removeChild(this.subscribers[i].dom);
                    this.subscribers.splice(i, 1);
                    break;
                }
            }
        }
    };

    return BulletManager;
})(Manager);

