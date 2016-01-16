var BulletBlueBuilder = (function(parent) {
    'use strict';

    BulletOrangeBuilder.prototype = Object.create(parent.prototype);

    var BULLET_WIDTH = 5,
        BULLET_HEIGHT = 5,
        BULLET_BACKGROUND_COLOR = 'blue',
        BULLET_SPEED = 7;

    function BulletOrangeBuilder(possLeft, possTop) {
        parent.call(this);

        this.positionLeft = possLeft;
        this.positionTop = possTop;
        this.speed = BULLET_SPEED;
        this.dom.style.width = BULLET_WIDTH + 'px';
        this.dom.style.height = BULLET_HEIGHT + 'px';
        this.dom.style.backgroundColor = BULLET_BACKGROUND_COLOR;
    }

    return BulletOrangeBuilder;

})(WorldObject);
