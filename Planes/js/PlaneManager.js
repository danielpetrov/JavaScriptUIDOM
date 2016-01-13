var PlaneManager = (function(parent){
    'use strict';

    function PlaneManager() {
        this.moveLeft= false;
        this.moveRight= false;
        this.moveForward= false;
        this.moveBack= false;
        this.isShooting= false;
        this.bulletManager = new BulletManager();
        parent.call(this);
    }

    PlaneManager.prototype = Object.create(parent.prototype);

    PlaneManager.prototype.constructor = PlaneManager;

    PlaneManager.prototype.onGameLoop = function(obj) {
        if (!obj.isEnemy) {
            if (this.isShooting) {
                var bullet = new Bullet(possLeft, possRight);
                bullet.positionLeft = obj.positionLeft + Math.floor(obj.planeWidth /2);
                bullet.positionTop = obj.positionTop - Math.ceil(obj.planeWidth /2);

                this.shoot(bullet);
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
        }

        obj.move();
    };

    PlaneManager.prototype.shoot = function(bullet) {
        this.bulletManager.spawn(bullet);
    };

    PlaneManager.prototype.keyboardListener  =  function(e) {
        var value = e.type == 'keydown' ? true : false;
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

    return PlaneManager;

})(Manager);





