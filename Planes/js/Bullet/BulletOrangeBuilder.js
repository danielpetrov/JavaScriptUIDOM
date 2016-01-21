var BulletOrangeBuilder = (function (parent) {
    'use strict';

    BulletOrangeBuilder.prototype = Object.create(parent.prototype);

    var BULLET_WIDTH = 18,
        BULLET_HEIGHT = 18,
        BULLET_SPEED = 7,
        BULLET_DAMAGE = 5,
        BULLET_IMAGE = "url('img/orangeBulletSmall.png') no-repeat";

    function BulletOrangeBuilder(possLeft, possTop) {
        parent.call(this);

        this.positionLeft = possLeft;
        this.positionTop = possTop;
        this.speed = BULLET_SPEED;
        this.dom.style.width = BULLET_WIDTH + 'px';
        this.dom.style.height = BULLET_HEIGHT + 'px';
        this.dom.style.background = BULLET_IMAGE;
        this.bulletDamage = BULLET_DAMAGE;
    }

    return BulletOrangeBuilder;

})(WorldObject);
