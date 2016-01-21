var WorldObject = (function () {
    'use strict';

    function WorldObject() {
        this.dom = document.createElement('div');
        if (this.getCssClass()) {
            this.dom.className = this.getCssClass();
        }
    }

    WorldObject.prototype.move = function () {
        this.dom.style.left = this.positionLeft + 'px';
        this.dom.style.top = this.positionTop + 'px';
    };

    WorldObject.prototype.getCssClass = function () {
        return '';
    };

    return WorldObject;
})();
