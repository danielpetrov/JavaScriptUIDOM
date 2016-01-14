var PlayerManager = (function(parent){
    'use strict';

    var bulletPossLeft,
        bulletPossTop;

    function PlayerManager() {
        this.moveLeft= false;
        this.moveRight= false;
        this.moveForward= false;
        this.moveBack= false;
        this.isShooting= false;
        this.bulletManager = new BulletManager();
        parent.call(this);
    }

    PlayerManager.prototype = Object.create(parent.prototype);

    PlayerManager.prototype.onGameLoop = function(obj) {
        if (this.isShooting) {
            bulletPossLeft = obj.positionLeft + Math.floor(obj.planeWidth /2);
            bulletPossTop = obj.positionTop - Math.ceil(obj.planeHeight /2);

            this.shoot(bulletPossLeft, bulletPossTop);
        }
        if (this.moveLeft && (obj.positionLeft - obj.speed) > 0) {
            obj.positionLeft -= obj.speed;
        }
        if (this.moveRight && (obj.positionLeft + obj.speed) < Game.getContextValue('width')) {
            obj.positionLeft += obj.speed;
        }
        if (this.moveForward && (obj.positionTop - obj.speed) > 0) {
            obj.positionTop -= obj.speed;
        }
        if (this.moveBack && (obj.positionTop + obj.speed) < Game.getContextValue('height')) {
            obj.positionTop += obj.speed;
        }

        obj.move();
    };

    PlayerManager.prototype.shoot = function(bulletPossLeft, bulletPossTop) {
        this.bulletManager.spawn(new Bullet(bulletPossLeft, bulletPossTop, 'orange'));
    };

    PlayerManager.prototype.keyboardListener  =  function(e) {
        var value = e.type == 'keydown';
        switch (e.keyCode) {
            case 37:
                this.moveLeft = value;
                break;
            case 38:
                this.moveForward = value;
                break;
            case 39:
                this.moveRight = value;
                break;
            case 40:
                this.moveBack = value;
                break;
            case 32:
                this.isShooting = value;
                break;

            default:
                break;
        }
    };

    return PlayerManager;

})(Manager);





