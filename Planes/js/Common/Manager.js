var Manager = (function () {
    'use strict';

    function Manager() {
        this.subscribers = [];
    }

    Manager.prototype.publish = function () {
        for (var i = 0; i < this.subscribers.length; i++) {
            this.onGameLoop(this.subscribers[i]);
        }
    };

    Manager.prototype.spawn = function (newObj) {
        this.subscribers.push(newObj);
        document.body.appendChild(newObj.dom);
    };

    Manager.prototype.deleteObject = function (obj) {
        //debugger;
        //var el = this.subscribers.splice(index, 1);
        // document.body.removeChild(obj.dom);
    };

    Manager.prototype.onGameLoop = function (obj) {
        throw new Error("Not implemented");
    };

    return Manager;

})();

