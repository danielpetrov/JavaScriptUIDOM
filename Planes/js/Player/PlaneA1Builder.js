var PlaneA1Builder = (function (parent) {
    'use strict';

    var PLANE_WIDTH = 78,
        PLANE_HEIGHT = 100,
        PLANE_SPEED = 3,
        PLANE_IMAGE = "url('img/player.png') no-repeat";

    PlaneA1Builder.prototype = Object.create(parent.prototype);

    function PlaneA1Builder() {
        parent.call(this, dom);

        this.dom.style.width = PLANE_WIDTH + 'px';
        this.dom.style.height = PLANE_HEIGHT + 'px';
        this.dom.style.background = PLANE_IMAGE;

        this.planeWidth = PLANE_WIDTH;
        this.planeHeight = PLANE_HEIGHT;
        this.speed = PLANE_SPEED;
    }

    return PlaneA1Builder;

})(WorldObject);

