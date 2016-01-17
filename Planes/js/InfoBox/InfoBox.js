var InfoBox = (function (parent) {
    'use strict';

    var INFO_BOX_WIDTH = 200,
        INFO_BOX_HEIGHT = 150;

    InfoBox.prototype = Object.create(parent.prototype);

    function InfoBox(player) {
        parent.call(this, dom);

        this.positionLeft = 10;
        this.positionTop = 10;
        this.dom.style.width = INFO_BOX_WIDTH + 'px';
        this.dom.style.height = INFO_BOX_HEIGHT + 'px';
        this.dom.style.backgroundColor = 'green';
        this.dom.style.left = this.positionLeft + 'px';
        this.dom.style.top = this.positionTop + 'px';
        this.dom.innerHTML = "";
        this.playerBulletsAmount = player.amountOfBullets;
    }

    InfoBox.prototype.getCssClass = function () {
        return "infoBox";
    };

    InfoBox.prototype.changeInfo = function (player) {
        this.playerBulletsAmount = player.amountOfBullets;
    };

    InfoBox.prototype.changeInnerContent = function () {
        this.dom.innerHTML = '1 ---- >' + 'ORANGE: ' + this.playerBulletsAmount.orangeBullets + "<br />";
        this.dom.innerHTML += '2 ---- >' + 'BLUE: ' + this.playerBulletsAmount.blueBullets;
    };

    return InfoBox;

})(WorldObject);

