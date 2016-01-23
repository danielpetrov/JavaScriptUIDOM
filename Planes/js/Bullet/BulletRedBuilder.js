var BulletRedBuilder = (function (parent) {
    'use strict';

    BulletRedBuilder.prototype = Object.create(parent.prototype);

    var BULLET_WIDTH = 18,
        BULLET_HEIGHT = 18,
        BULLET_SPEED = 7,
        BULLET_DAMAGE = 15,
        BULLET_IMAGE = "url('img/bulletRed.png') no-repeat";

    function BulletRedBuilder(possLeft, possTop) {
        parent.call(this);

        this.positionLeft = possLeft;
        this.positionTop = possTop;
        this.speed = BULLET_SPEED;
        this.dom.style.width = BULLET_WIDTH + 'px';
        this.dom.style.height = BULLET_HEIGHT + 'px';
        this.dom.style.background = BULLET_IMAGE;
        this.bulletDamage = BULLET_DAMAGE;
    }

    return BulletRedBuilder;

})(WorldObject);
