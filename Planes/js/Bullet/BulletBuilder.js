var Bullet = (function (orangeBullet, blueBullet, purpleBullet, parent) {
    'use strict';

    var self = {};

    Bullet.prototype = Object.create(parent.prototype);

    function Bullet(possLeft, possTop, type, isEnemy) {
        self.bulletType = type;
        debugger;
        switch (self.bulletType) {
            case BULLET_TYPE.ORANGE_BULLET:
                orangeBullet.call(this, possLeft, possTop);
                break;
            case BULLET_TYPE.BLUE_BULLET:
                blueBullet.call(this, possLeft, possTop);
                break;
            case BULLET_TYPE.PURPLE_BULLET:
                purpleBullet.call(this, possLeft, possTop);
                break;
            default:
                orangeBullet.call(this, possLeft, possTop);
                break;
        }

        this.isEnemy = isEnemy;
    }

    Bullet.prototype.move = function (isEnemy) {
        parent.prototype.move.call(this);
        if(isEnemy){
            this.positionLeft -= this.speed;
        } else {
            this.positionLeft += this.speed;
        }
    };

    Bullet.prototype.getCssClass = function () {
        return "bullet";
    };

    return Bullet;
})(BulletOrangeBuilder, BulletBlueBuilder, BulletPurpleBuilder, WorldObject);
