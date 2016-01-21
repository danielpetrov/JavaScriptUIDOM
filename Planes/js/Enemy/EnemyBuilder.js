var EnemyBuilder = (function (parent) {
    'use strict';

    var ENEMY_HEALTH = 50,
        ENEMY_DOM_CLASS = 'enemy',
        ENEMY_STARTING_POSITION_LEFT = 1200,
        ENEMY_STARTING_POSITION_TOP = 250;

    EnemyBuilder.prototype = Object.create(parent.prototype);

    function EnemyBuilder() {
        parent.call(this);

        this.positionLeft = ENEMY_STARTING_POSITION_LEFT;
        this.positionTop = ENEMY_STARTING_POSITION_TOP;

        this.dom.style.left = ENEMY_STARTING_POSITION_LEFT + 'px';
        this.dom.style.top = ENEMY_STARTING_POSITION_TOP + 'px';

        this.health = ENEMY_HEALTH;
    }

    EnemyBuilder.prototype.move = function () {
        parent.prototype.move.call(this);
        this.positionLeft -= this.speed;
    };

    EnemyBuilder.prototype.getCssClass = function () {
        return ENEMY_DOM_CLASS;
    };

    return EnemyBuilder;

})(EnemyLevel1Builder);