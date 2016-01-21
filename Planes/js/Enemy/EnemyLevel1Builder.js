var EnemyLevel1Builder = (function (parent) {
    'use strict';

    var PLANE_WIDTH = 128,
        PLANE_HEIGHT = 128,
        PLANE_SPEED = 7,
        PLANE_IMAGE = "url('img/enemyLevel1.png') no-repeat";

    EnemyLevel1Builder.prototype = Object.create(parent.prototype);

    function EnemyLevel1Builder() {
        parent.call(this, dom);

        this.dom.style.width = PLANE_WIDTH + 'px';
        this.dom.style.height = PLANE_HEIGHT + 'px';
        this.dom.style.background = PLANE_IMAGE;

        this.planeWidth = PLANE_WIDTH;
        this.planeHeight = PLANE_HEIGHT;
        this.speed = PLANE_SPEED;
    }

    return EnemyLevel1Builder;

})(WorldObject);

