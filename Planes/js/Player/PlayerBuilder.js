var PlayerBuilder = (function (parent) {
    'use strict';

    var PLAYER_HEALTH = 100,
        AMOUNT_OF_ORANGE_BULLETS = 40,
        AMOUNT_OF_BLUE_BULLETS = 20,
        PLAYER_DOM_ID = 'player',
        PLAYER_STARTING_POSITION_LEFT = 3,
        PLAYER_STARTING_POSITION_TOP = null;

    PlayerBuilder.prototype = Object.create(parent.prototype);

    function PlayerBuilder() {
        parent.call(this);

        PLAYER_STARTING_POSITION_TOP = (Game.getContextValue('height') / 2) - this.planeHeight / 2;
        this.dom.id = PLAYER_DOM_ID;

        this.positionLeft = PLAYER_STARTING_POSITION_LEFT;
        this.positionTop = PLAYER_STARTING_POSITION_TOP;
        //this.isEnemy = false;
        this.health = PLAYER_HEALTH;
        this.amountOfBullets =
        {
            orangeBullets : AMOUNT_OF_ORANGE_BULLETS,
            blueBullets : AMOUNT_OF_BLUE_BULLETS
        };
        //this.amountOfRockets = AMOUNT_OF_ROCKETS;
    }

    return PlayerBuilder;

})(PlaneA1Builder);