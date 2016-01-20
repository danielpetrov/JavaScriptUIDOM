var InfoBox = (function (parent) {
    'use strict';

    var INFO_BOX_WIDTH = 120,
        INFO_BOX_HEIGHT = 60,
        blue = document.getElementById('blue');

    InfoBox.prototype = Object.create(parent.prototype);

    function InfoBox(player) {
        parent.call(this, dom);

        this.dom.style.width = INFO_BOX_WIDTH + 'px';
        this.dom.style.height = INFO_BOX_HEIGHT + 'px';
        this.dom.style.left = 10 + 'px';
        this.dom.style.top = 10 + 'px';
        this.dom.innerHTML = "";
        this.playerBulletsAmount = player.amountOfBullets;
        this.playerHealth = player.health;

        this.blue = document.getElementById('blue');
        this.dom.appendChild(this.blue);
        this.orange = document.getElementById('orange');
        this.dom.appendChild(this.orange);
    }

    InfoBox.prototype.getCssClass = function () {
        return "infoBox";
    };

    InfoBox.prototype.changeInfo = function (player) {
        this.playerBulletsAmount = player.amountOfBullets;
    };

    InfoBox.prototype.changeInnerContent = function () {

        this.blue.innerHTML = this.playerBulletsAmount.blueBullets;
        this.orange.innerHTML = this.playerBulletsAmount.orangeBullets;
    };

    return InfoBox;

})(WorldObject);

