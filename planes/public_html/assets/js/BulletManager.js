function BulletManager(){
    GameObjectManager.call(this);
} 

BulletManager.prototype = Object.create(GameObjectManager.prototype);
BulletManager.prototype.constructor = BulletManager;