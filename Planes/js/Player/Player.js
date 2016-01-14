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