var Player = (function (parent) {
    'use strict';

    Player.prototype = Object.create(parent.prototype);

    function Player() {
        parent.call(this);

    }

    Player.prototype.addBullets = addBullets;

    Player.prototype.addRockets = addRockets;

    Player.prototype.addHealth = addHealth;

    function addBullets(amount, bulletType) {

        switch(bulletType){
            case BULLET_TYPE.ORANGE_BULLET:
                if(!(this.amountOfBullets.orangeBullets == 0 && amount < 0)){
                    this.amountOfBullets.orangeBullets += amount;
                }
                break;
            case BULLET_TYPE.BLUE_BULLET:
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