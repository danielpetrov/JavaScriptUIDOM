var EnemyLevel1Builder = (function (parent) {
    'use strict';

    var PLANE_WIDTH = 128,
        PLANE_HEIGHT = 128,
        PLANE_SPEED = 8,
        ENEMY_HEALTH = 50,
        PLANE_IMAGE = "url('img/enemyLevel1.png') no-repeat",
        ENEMY_STARTING_POSITION_LEFT = 1300,
        ENEMY_STARTING_POSITION_TOP = 250,
        SCORE_POINTS = 25;


    EnemyLevel1Builder.prototype = Object.create(parent.prototype);

    function EnemyLevel1Builder(positionTop) {
        parent.call(this);

        this.positionTop = positionTop || ENEMY_STARTING_POSITION_TOP;

        ENEMY_STARTING_POSITION_LEFT = Game.getContextValue('width');
        this.positionLeft = ENEMY_STARTING_POSITION_LEFT;

        this.dom.style.left = ENEMY_STARTING_POSITION_LEFT + 'px';
        this.dom.style.top = ENEMY_STARTING_POSITION_TOP + 'px';

        this.dom.style.width = PLANE_WIDTH + 'px';
        this.dom.style.height = PLANE_HEIGHT + 'px';
        this.dom.style.background = PLANE_IMAGE;

        this.planeWidth = PLANE_WIDTH;
        this.planeHeight = PLANE_HEIGHT;
        this.speed = PLANE_SPEED;
        this.health = ENEMY_HEALTH;
        this.scorePoints = SCORE_POINTS;
    }

    EnemyLevel1Builder.prototype.move = function () {
        parent.prototype.move.call(this);
        this.positionLeft -= this.speed;
    };

    return EnemyLevel1Builder;

})(WorldObject);

