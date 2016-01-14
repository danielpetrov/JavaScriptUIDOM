var Bullet = (function(orangeBullet, someOtherBullet) {
    'use strict';

    var BLUE_BULLET = 'blue',
        ORANGE_BULLET = 'orange',
        bulletType;

    Bullet.prototype = Object.create(orangeBullet.prototype);

    function Bullet(possLeft, possTop, type) {
        orangeBullet.call(this, possLeft, possTop);
    }

    Bullet.prototype.move = function () {
        orangeBullet.prototype.move.call(this);
        this.positionTop -= this.speed;
    };

    Bullet.prototype.getCssClass = function () {
        return "bullet";
    };

    return Bullet;
})(BulletOrangeBuilder);
