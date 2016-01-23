var BossLevel1Builder = (function (parent) {
    'use strict';

    var PLANE_WIDTH = 194,
        PLANE_HEIGHT = 103,
        PLANE_SPEED = 2,
        ENEMY_HEALTH = 500,
        PLANE_IMAGE = "url('img/bossLevel1.png') no-repeat",
        SCORE_POINTS = 300,
        DAMAGE_TO_BASE = 120;


    BossLevel1Builder.prototype = Object.create(parent.prototype);

    function BossLevel1Builder(positionTop) {
        parent.call(this);

        this.positionTop = positionTop;
        this.positionLeft = Game.getContextValue('width');
        this.dom.style.top = this.positionTop + 'px';
        this.dom.style.left = this.positionLeft + 'px';
        this.dom.style.background = PLANE_IMAGE;

        this.planeWidth = PLANE_WIDTH;
        this.planeHeight = PLANE_HEIGHT;
        this.dom.style.width = this.planeWidth + 'px';
        this.dom.style.height = this.planeHeight + 'px';

        this.speed = PLANE_SPEED;
        this.health = ENEMY_HEALTH;
        this.scorePoints = SCORE_POINTS;
        this.damageToBase = DAMAGE_TO_BASE;
    }

    BossLevel1Builder.prototype.move = function () {
        parent.prototype.move.call(this);
        this.positionLeft -= 0.2;
        if(this.positionTop <= 0){
            this.speed = -this.speed;
        } else if(this.positionTop >= Game.getContextValue('height') - this.planeHeight){
            this.speed = -this.speed;
        }
        this.positionTop += this.speed;
    };

    return BossLevel1Builder;

})(WorldObject);

