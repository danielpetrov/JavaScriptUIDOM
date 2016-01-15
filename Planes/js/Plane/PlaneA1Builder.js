var PlaneA1Builder = (function(parent){
    'use strict';

    var PLANE_WIDTH = 101,
        PLANE_HEIGHT = 75,
        PLANE_SPEED = 3;

    PlaneA1Builder.prototype = Object.create(parent.prototype);

    function PlaneA1Builder() {
        parent.call(this, dom);

        this.dom.style.width = PLANE_WIDTH + 'px';
        this.dom.style.height = PLANE_HEIGHT + 'px';

        this.dom.style.background = "url('img/v2_101x75.png') no-repeat";
        this.planeWidth = PLANE_WIDTH;
        this.planeHeight = PLANE_HEIGHT;
        this.speed = PLANE_SPEED;
    }

    return PlaneA1Builder;

})(WorldObject);

