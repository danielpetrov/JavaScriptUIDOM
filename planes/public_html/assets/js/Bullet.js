function Bullet() {
    var dom = document.createElement('div');	
    GameObject.call(this, dom);
}

Bullet.prototype = Object.create(GameObject.prototype);
Bullet.prototype.constructor = Bullet;

Bullet.prototype.getCssClass = function () {
    return "bullet";
};