var BossLevel1Builder = (function (parent) {
    'use strict';

    var PLANE_WIDTH = 194,
        PLANE_HEIGHT = 103,
        PLANE_SPEED = 7,
        ENEMY_HEALTH = 500,
        PLANE_IMAGE = "url('img/bossLevel1.png') no-repeat",
        ENEMY_STARTING_POSITION_LEFT = 1100,
        ENEMY_STARTING_POSITION_TOP = 250;


    BossLevel1Builder.prototype = Object.create(parent.prototype);

    function BossLevel1Builder(positionTop) {
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
    }

    BossLevel1Builder.prototype.move = function () {
        parent.prototype.move.call(this);
        this.positionLeft -= 0.4;
        if(this.positionTop <= 0){
            this.speed = -this.speed;
        } else if(this.positionTop >= Game.getContextValue('height') - this.planeHeight){
            this.speed = -this.speed;
        }
        this.positionTop += this.speed;
    };

    return BossLevel1Builder;

})(WorldObject);

