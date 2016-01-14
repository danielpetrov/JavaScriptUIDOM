var Plane = (function(parent){
    'use strict';

    var PLANE_WIDTH = 101,
        PLANE_HEIGHT = 75,
        PLANE_SPEED = 1;

    function Plane() {
        parent.call(this, dom);

        this.dom.style.width = PLANE_WIDTH + 'px';
        this.dom.style.height = PLANE_HEIGHT + 'px';

        this.planeWidth = PLANE_WIDTH;
        this.planeHeight = PLANE_HEIGHT;
        this.speed = PLANE_SPEED;
    }

    Plane.prototype = Object.create(parent.prototype);

    return Plane;

})(WorldObject);

