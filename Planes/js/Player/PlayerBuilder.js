var PlayerBuilder = (function(parent){
    'use strict';

    var PLAYER_HEALTH = 100,
        AMOUNT_OF_BULLETS = 40,
        AMOUNT_OF_ROCKETS = 7;

    function PlayerBuilder() {
        parent.call(this);

        this.dom.id = 'player';
        this.positionLeft = (Game.getContextValue('width')/ 2) - this.planeWidth/2;
        this.positionTop = Game.getContextValue('height') - this.planeHeight;
        this.isEnemy = false;
        this.health = PLAYER_HEALTH;
        this.amountOfBullets = AMOUNT_OF_BULLETS;
        this.amountOfRockets = AMOUNT_OF_ROCKETS;
    }

    PlayerBuilder.prototype = Object.create(parent.prototype);

    return PlayerBuilder;

})(PlaneA1Builder);