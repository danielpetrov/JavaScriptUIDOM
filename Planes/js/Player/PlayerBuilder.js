var PlayerBuilder = (function (parent) {
    'use strict';

    var PLAYER_HEALTH = 100,
        AMOUNT_OF_ORANGE_BULLETS = 40,
        AMOUNT_OF_BLUE_BULLETS = 20,
        AMOUNT_OF_ROCKETS = 7;

    PlayerBuilder.prototype = Object.create(parent.prototype);

    function PlayerBuilder() {
        parent.call(this);

        this.dom.id = 'player';
        this.positionLeft = (Game.getContextValue('width') / 2) - this.planeWidth / 2;
        this.positionTop = Game.getContextValue('height') - this.planeHeight;
        this.isEnemy = false;
        this.health = PLAYER_HEALTH;
        this.amountOfBullets =
        {
            orangeBullets : AMOUNT_OF_ORANGE_BULLETS,
            blueBullets : AMOUNT_OF_BLUE_BULLETS
        };
        this.amountOfRockets = AMOUNT_OF_ROCKETS;
    }

    return PlayerBuilder;

})(PlaneA1Builder);