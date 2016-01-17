var PlayerManager = (function (parent) {
    'use strict';

    var bulletPossLeft,
        bulletPossTop,
        FIRE_SPEED = 4,
        BULLET_TYPE_ORANGE = 'orange',
        BULLET_TYPE_BLUE = 'blue',
        ONE_SECOND_TIMEOUT = 1000,
        hasShot = false;

    PlayerManager.prototype = Object.create(parent.prototype);

    function PlayerManager() {
        parent.call(this);

        this.moveLeft = false;
        this.moveRight = false;
        this.moveForward = false;
        this.moveBack = false;
        this.isShooting = false;
        this.bulletManager = new BulletManager();
        this.fireSpeed = FIRE_SPEED;
        this.bulletType = BULLET_TYPE_ORANGE;
    }

    PlayerManager.prototype.onGameLoop = function (obj) {
        if (this.isShooting) {
            if(this.bulletType ==  BULLET_TYPE_ORANGE && obj.amountOfBullets.orangeBullets > 0 ||
                this.bulletType ==  BULLET_TYPE_BLUE && obj.amountOfBullets.blueBullets > 0){

                bulletPossLeft = obj.positionLeft + Math.floor(obj.planeWidth / 2);
                bulletPossTop = obj.positionTop - Math.ceil(obj.planeHeight / 2);

                if (!hasShot) {
                    this.shoot();
                    hasShot = true;
                    setTimeout(function () {
                        hasShot = false;
                    }, ONE_SECOND_TIMEOUT / this.fireSpeed);
                }
            }
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

    PlayerManager.prototype.shoot = function () {
        this.bulletManager.spawn(new Bullet(bulletPossLeft, bulletPossTop, this.bulletType));
    };

    PlayerManager.prototype.keyboardListener = function (e) {

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
            case 49:
                this.bulletType = BULLET_TYPE_ORANGE;
                break;
            case 50:
                this.bulletType = BULLET_TYPE_BLUE;
                break;
            default:
                break;
        }
    };

    return PlayerManager;

})(Manager);





