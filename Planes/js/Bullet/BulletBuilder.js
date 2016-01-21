var Bullet = (function (orangeBullet, blueBullet, parent) {
    'use strict';

    var self = {};

    Bullet.prototype = Object.create(parent.prototype);

    function Bullet(possLeft, possTop, type) {
        self.bulletType = type;

        switch (self.bulletType) {
            case BULLET_TYPE.ORANGE_BULLET:
                orangeBullet.call(this, possLeft, possTop);
                break;
            case BULLET_TYPE.BLUE_BULLET:
                blueBullet.call(this, possLeft, possTop);
                break;
            default:
                orangeBullet.call(this, possLeft, possTop);
                break;
        }

    }

    Bullet.prototype.move = function () {
        parent.prototype.move.call(this);
        this.positionLeft += this.speed;
    };

    Bullet.prototype.getCssClass = function () {
        return "bullet";
    };

    return Bullet;
})(BulletOrangeBuilder, BulletBlueBuilder, WorldObject);
