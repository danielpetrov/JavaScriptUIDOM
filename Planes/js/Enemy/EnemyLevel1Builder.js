var EnemyLevel1Builder = (function (parent) {
    'use strict';

    var PLANE_WIDTH = 128,
        PLANE_HEIGHT = 128,
        PLANE_SPEED = 1,
        ENEMY_HEALTH = 50,
        PLANE_IMAGE = "url('img/enemyLevel1.png') no-repeat",
        SCORE_POINTS = 25,
        DAMAGE_TO_BASE = 35;


    EnemyLevel1Builder.prototype = Object.create(parent.prototype);

    function EnemyLevel1Builder(positionTop) {
        parent.call(this);

        this.positionTop = positionTop;
        this.positionLeft = Game.getContextValue('width');
        this.dom.style.top = this.positionTop + 'px';
        this.dom.style.left = this.positionLeft + 'px';
        this.dom.style.background = PLANE_IMAGE;

        this.dom.style.width = PLANE_WIDTH + 'px';
        this.dom.style.height = PLANE_HEIGHT + 'px';
        this.planeWidth = PLANE_WIDTH;
        this.planeHeight = PLANE_HEIGHT;

        this.speed = PLANE_SPEED;
        this.health = ENEMY_HEALTH;
        this.scorePoints = SCORE_POINTS;
        this.damageToBase = DAMAGE_TO_BASE;

        //inverted, because ship is rotated 90
    }

    EnemyLevel1Builder.prototype.move = function () {
        parent.prototype.move.call(this);
        this.positionLeft -= this.speed;
    };

    return EnemyLevel1Builder;

})(WorldObject);

