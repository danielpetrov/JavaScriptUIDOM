var InfoBox = (function (parent) {
    'use strict';

    var INFO_BOX_WIDTH = 120,
        INFO_BOX_HEIGHT = 60,
        INFO_BOX_LEFT_POSS = null,
        INFO_BOX_TOP_POSS = null,
        blue = document.getElementById('blue');

    InfoBox.prototype = Object.create(parent.prototype);

    function InfoBox(player) {
        parent.call(this, dom);

        INFO_BOX_TOP_POSS = Game.getContextValue('height') - INFO_BOX_HEIGHT - 2;
        INFO_BOX_LEFT_POSS = Game.getContextValue('width') - INFO_BOX_WIDTH - 2;

        this.dom.style.width = INFO_BOX_WIDTH + 'px';
        this.dom.style.height = INFO_BOX_HEIGHT + 'px';
        this.dom.style.left = INFO_BOX_LEFT_POSS + 'px';
        this.dom.style.top = INFO_BOX_TOP_POSS + 'px';
        this.playerBulletsAmount = player.amountOfBullets;
        this.playerHealth = player.health;

        this.blue = document.getElementById('blue');
        this.blue.style.top = (INFO_BOX_TOP_POSS + 20) + "px";
        this.blue.style.left = (INFO_BOX_LEFT_POSS + 68) + "px";
        this.dom.appendChild(this.blue);

        this.orange = document.getElementById('orange');
        this.orange.style.top = (INFO_BOX_TOP_POSS + 20) + "px";
        this.orange.style.left = (INFO_BOX_LEFT_POSS + 20) + "px";
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

