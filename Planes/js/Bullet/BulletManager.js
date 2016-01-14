var BulletManager = (function(parent){
    'use strict';

    function BulletManager(){
        this.dom = document.createElement('div');
        parent.call(this);
    }
    //WHY DOESNT IT WORK?
    BulletManager.prototype = Object.create(parent.prototype);

    BulletManager.prototype.onGameLoop = function(obj) {

        obj.positionLeft += 10;
        obj.possitionTop += 10;


       // this.dom.style.left = obj.positionLeft + 'px';
        //this.dom.style.top = obj.positionTop + 'px';
        //obj.move();
        //WHY OBJECT.MOVE IS NOT A FUNCTION?
    };

    return BulletManager;

})(Manager);

