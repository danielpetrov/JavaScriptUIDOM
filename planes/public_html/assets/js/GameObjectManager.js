function GameObjectManager() {
      this.subscribers = [];
}

GameObjectManager.prototype.publish= function() {
    for (var i = 0; i < this.subscribers.length; i++) {
        this.onGameLoop(this.subscribers[i]);
    }
};

GameObjectManager.prototype.spawn = function(newObj) {
    this.subscribers.push(newObj);
    document.body.appendChild(newObj.dom);
};

GameObjectManager.prototype.destroy = function(index) {
    var el = this.subscribers.splice(index, 1);
    document.body.removeChild(el.dom);
};
	
GameObjectManager.prototype.onGameLoop = function(obj) {
    throw new Error("Not implemented");
};