var Player = (function (parent) {
    'use strict';
    var ORANGE_BULET_TYPE = 'orange',
        BLUE_BULLET_TYPE = 'blue';

    Player.prototype = Object.create(parent.prototype);

    function Player() {

        parent.call(this);

    }

    Player.prototype.addBullets = addBullets;

    Player.prototype.addRockets = addRockets;

    Player.prototype.addHealth = addHealth;

    function addBullets(amount, bulletType) {

        switch(bulletType){
            case ORANGE_BULET_TYPE:
                if(!(this.amountOfBullets.orangeBullets == 0 && amount < 0)){
                    this.amountOfBullets.orangeBullets += amount;
                }
                break;
            case BLUE_BULLET_TYPE:
                if(!(this.amountOfBullets.blueBullets == 0 && amount < 0)){
                    this.amountOfBullets.blueBullets += amount;
                }
                break;
        }
    }

    function addRockets(amount) {
        this.amountOfRockets += amount;
    }

    function addHealth(amount) {
        this.health += amount;
    }

    return Player;

})(PlayerBuilder);