var Bullet = (function(orangeBullet, blueBullet) {
    'use strict';

    var BLUE_BULLET = 'blue',
        ORANGE_BULLET = 'orange',
        self = {};

    switch(self.bulletType){
        case ORANGE_BULLET:
            Bullet.prototype = Object.create(orangeBullet.prototype);
            break;
        case BLUE_BULLET:
            Bullet.prototype = Object.create(blueBullet.prototype);
            break;
        default:
            Bullet.prototype = Object.create(orangeBullet.prototype);
            break;
    }

    function Bullet(possLeft, possTop, type) {
        self.bulletType = type;

        switch(self.bulletType){
            case ORANGE_BULLET:
                orangeBullet.call(this, possLeft, possTop);
                self.parent = orangeBullet;
                break;
            case BLUE_BULLET:
                blueBullet.call(this, possLeft, possTop);
                self.parent = blueBullet;
                break;
            default:
                orangeBullet.call(this, possLeft, possTop);
                self.parent = orangeBullet;
                break;
        }

    }

    Bullet.prototype.move = function () {
        orangeBullet.prototype.move.call(this);
        this.positionTop -= this.speed;
    };

    Bullet.prototype.getCssClass = function () {
        return "bullet";
    };

    return Bullet;
})(BulletOrangeBuilder, BulletBlueBuilder);
