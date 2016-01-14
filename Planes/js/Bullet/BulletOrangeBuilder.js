var BulletOrangeBuilder = (function(parent) {
    'use strict';

    var BULLET_WIDTH = 10,
        BULLET_HEIGHT = 10,
        BULLET_BACKGROUNDCOLOR = 'orange';

    function BulletOrangeBuilder(possLeft, possTop) {
        parent.call(this);

        this.positionLeft = possLeft;
        this.positionTop = possTop;
        this.dom.style.width = BULLET_WIDTH + 'px';
        this.dom.style.height = BULLET_HEIGHT + 'px';


        this.dom.style.left = this.positionLeft + 'px';
        this.dom.style.top = this.positionTop + 'px';

        this.dom.style.backgroundColor = BULLET_BACKGROUNDCOLOR;
        this.speed = 1;
    }

    BulletOrangeBuilder.prototype = Object.create(parent.prototype);

    BulletOrangeBuilder.prototype.getCssClass = function () {
        return "bullet";
    };

    return BulletOrangeBuilder;

})(WorldObject);
