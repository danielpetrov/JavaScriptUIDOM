var Bullet = (function(parent) {
    'use strict';

    var BULLET_WIDTH = 10,
        BULLET_HEIGHT = 10,
        BULLET_BACKGROUNDCOLOR = 'orange';

    function Bullet(possLeft, possTop) {
        parent.call(this);

        this.positionLeft = possLeft;
        this.positionTop = possTop;
        this.dom.style.width = BULLET_WIDTH + 'px';
        this.dom.style.height = BULLET_HEIGHT + 'px';
        this.dom.style.backgroundColor = BULLET_BACKGROUNDCOLOR;
        this.speed = 1;

    }

    Bullet.prototype = Object.create(parent.prototype);

    Bullet.prototype.getCssClass = function () {
        return "bullet";
    };

    Bullet.prototype.move = function () {
        this.dom.style.left = 250 + 'px';
        this.dom.style.top = 250 + 'px';
    };

    return Bullet;

})(WorldObject);
