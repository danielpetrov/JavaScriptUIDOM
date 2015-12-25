function Plane() {
    this.planeWidth = 101;
    this.planeHeight = 75;
    
    this.dom = document.createElement('div');
    this.dom.id = 'plane';
    this.positionLeft = (Game.getContextValue('width')/ 2) - this.planeWidth/2;
    this.positionTop = Game.getContextValue('height') - this.planeHeight;
    
    this.isEnemy = false;
    this.speed = 1;
}

Plane.prototype = Object.create(GameObject.prototype);
Plane.prototype.constructor = Plane;