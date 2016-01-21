var EnemyManager = (function (parent) {
    'use strict';

    EnemyManager.prototype = Object.create(parent.prototype);

    function EnemyManager() {
        parent.call(this);
    }

    EnemyManager.prototype.onGameLoop = function (enemy) {
        enemy.move();
    };

    EnemyManager.prototype.publish = function (bullets) {
        for (var i = 0; i < this.subscribers.length; i++) {
            this.onGameLoop(this.subscribers[i]);

            if(this.subscribers[i].positionLeft < -130){
                //document.body.removeChild(this.subscribers[i].dom);
                //this.subscribers.splice(i, 1);
                Game.pause();
                alert("GAME OVER");
            }

            for(var bullet in bullets.subscribers){
                if( (bullets.subscribers[bullet].positionTop > this.subscribers[i].positionTop)
                    && (bullets.subscribers[bullet].positionTop < (this.subscribers[i].positionTop + this.subscribers[i].planeWidth))
               && (bullets.subscribers[bullet].positionLeft > this.subscribers[i].positionLeft)
                && bullets.subscribers[bullet].positionLeft < (this.subscribers[i].positionLeft + this.subscribers[i].planeHeight)){

                    this.subscribers[i].health -= bullets.subscribers[bullet].bulletDamage;
                    if(this.subscribers[i].health <= 0){
                        document.body.removeChild(this.subscribers[i].dom);
                        this.subscribers.splice(i, 1);
                    }

                    document.body.removeChild(bullets.subscribers[bullet].dom);
                    bullets.subscribers.splice(bullet, 1);


                    break;
                }
            }
        }
    };

    return EnemyManager;
})(Manager);

