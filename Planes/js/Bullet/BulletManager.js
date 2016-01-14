var BulletManager = (function(parent){
    'use strict';

    BulletManager.prototype = Object.create(parent.prototype);

    function BulletManager(){

        parent.call(this);
        this.subscribers = [];
    }

    BulletManager.prototype.onGameLoop = function(obj) {

        obj.move();
    };

    return BulletManager;

})(Manager);

