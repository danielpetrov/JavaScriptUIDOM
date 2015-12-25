function GameObject(dom) {
        this.dom = dom;
		if (this.getCssClass()) {
			this.dom.className = this.getCssClass();
		}
		this.move();
        this.isEnemy = false;
        this.speed = 1;
        this.positionLeft = 0;
        this.positionTop = 0;
};

GameObject.prototype.move = function () {
    this.dom.style.left = this.positionLeft + 'px';
	this.dom.style.top = this.positionTop + 'px';
};

GameObject.prototype.getCssClass = function () {
    return '';
};