var BulletBlueBuilder = (function (parent) {
    'use strict';

    BulletOrangeBuilder.prototype = Object.create(parent.prototype);

    var BULLET_WIDTH = 20,
        BULLET_HEIGHT = 20,
        BULLET_SPEED = 7,
        BULLET_DAMAGE = 15;

    function BulletOrangeBuilder(possLeft, possTop) {
        parent.call(this);

        this.positionLeft = possLeft - 0.5 * BULLET_WIDTH;
        this.positionTop = possTop;
        this.speed = BULLET_SPEED;
        this.dom.style.width = BULLET_WIDTH + 'px';
        this.dom.style.height = BULLET_HEIGHT + 'px';
        this.dom.style.background = "url('img/blueBulletSmall.png') no-repeat";
        this.bulletDamage = BULLET_DAMAGE;
    }

    return BulletOrangeBuilder;

})(WorldObject);
