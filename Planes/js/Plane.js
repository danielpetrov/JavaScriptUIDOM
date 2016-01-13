var Plane = (function(parent){
    'use strict';

    var PLANE_WIDTH = 101,
        PLANE_HEIGHT = 75,
        PLANE_SPEED = 1;

    function Plane() {
        parent.call(this, dom);

        this.dom.id = 'plane';
        this.planeWidth = PLANE_WIDTH;
        this.planeHeight = PLANE_HEIGHT;
        this.positionLeft = (Game.getContextValue('width')/ 2) - this.planeWidth/2;
        this.positionTop = Game.getContextValue('height') - this.planeHeight;
        this.isEnemy = false;
        this.speed = PLANE_SPEED;
    }

    Plane.prototype = Object.create(parent.prototype);
    Plane.prototype.constructor = Plane;

    return Plane;

})(WorldObject);

