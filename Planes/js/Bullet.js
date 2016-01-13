var Bullet = (function(parent) {
    'use strict';

    function Bullet(possLeft, possRight) {
        parent.call(this);
        this.possitionLeft = possLeft;
        this.possitionRight = possRight;
    }

    Bullet.prototype = Object.create(parent.prototype);
    Bullet.prototype.constructor = Bullet;

    Bullet.prototype.getCssClass = function () {
        return "bullet";
    };

    return Bullet;

})(WorldObject);
