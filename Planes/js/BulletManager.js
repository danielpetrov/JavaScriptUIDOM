var BulletManager = (function(parent){
    'use strict';

    function BulletManager(){
        parent.call(this);
    }

    BulletManager.prototype = Object.create(parent.prototype);
    BulletManager.prototype.constructor = BulletManager;

    return BulletManager;

})(Manager);
