var Bullet = (function(orangeBullet, someOtherBullet) {
    'use strict';

    var BLUE_BULLET = 'blue',
        ORANGE_BULLET = 'orange',
        bulletType;

    function Bullet(possLeft, possTop, type) {
        bulletType = type;
        switch(type){
            case ORANGE_BULLET: orangeBullet.call(this, possLeft, possTop);
                break;
            case BLUE_BULLET: someOtherBullet.call(this, possLeft, possTop);
                break;
        }

    }

    switch(bulletType){
        case ORANGE_BULLET: Bullet.prototype = Object.create(orangeBullet.prototype);
            break;
        case BLUE_BULLET: Bullet.prototype =  Object.create(someOtherBullet.prototype);
            break;
    }


    return Bullet;

})(BulletOrangeBuilder, BulletOrangeBuilder);
