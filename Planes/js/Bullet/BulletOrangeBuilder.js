var BulletOrangeBuilder = (function(parent) {
    'use strict';

    BulletOrangeBuilder.prototype = Object.create(parent.prototype);

    var BULLET_WIDTH = 10,
        BULLET_HEIGHT = 10,
        BULLET_BACKGROUND_COLOR = 'orange';

    function BulletOrangeBuilder(possLeft, possTop) {
        parent.call(this);

        this.positionLeft = possLeft;
        this.positionTop = possTop;
        this.speed = 2;
        this.dom.style.width = BULLET_WIDTH + 'px';
        this.dom.style.height = BULLET_HEIGHT + 'px';
        this.dom.style.backgroundColor = BULLET_BACKGROUND_COLOR;
    }

    return BulletOrangeBuilder;

})(WorldObject);
