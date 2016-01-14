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

})(Plane);

var Player = (function(parent){
    'use strict';

    function Player() {
        parent.call(this);

    }

    Player.prototype = Object.create(parent.prototype);

    Player.prototype.addBullets = addBullets;

    Player.prototype.addRockets = addRockets;

    Player.prototype.addHealth = addHealth;

    function addBullets(amount){
        this.amountOfBullets += amount;
    }

    function addRockets(amount){
        this.amountOfBullets += amount;
    }

    function addHealth(amount){
        this.health += amount;
    }

    return Player;

})(PlayerBuilder);