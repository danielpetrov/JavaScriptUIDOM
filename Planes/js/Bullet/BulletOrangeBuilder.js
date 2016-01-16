var BulletOrangeBuilder = (function(parent) {
    'use strict';

    BulletOrangeBuilder.prototype = Object.create(parent.prototype);

    var BULLET_WIDTH = 10,
        BULLET_HEIGHT = 10,
        BULLET_BACKGROUND_COLOR = 'orange',
        BULLET_SPEED = 4,
        BULLET_DAMAGE = 5;

    function BulletOrangeBuilder(possLeft, possTop) {
        parent.call(this);

        this.positionLeft = possLeft;
        this.positionTop = possTop;
        this.speed = BULLET_SPEED;
        this.dom.style.width = BULLET_WIDTH + 'px';
        this.dom.style.height = BULLET_HEIGHT + 'px';
        this.dom.style.backgroundColor = BULLET_BACKGROUND_COLOR;
        this.bulletDamage = BULLET_DAMAGE;
    }

    return BulletOrangeBuilder;

})(WorldObject);
