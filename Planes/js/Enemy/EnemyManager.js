var EnemyManager = (function (parent) {
    'use strict';

    EnemyManager.prototype = Object.create(parent.prototype);

    function EnemyManager() {
        parent.call(this);
    }

    EnemyManager.prototype.onGameLoop = function (enemy) {
        enemy.move();
    };

    EnemyManager.prototype.publish = function (bullets, player) {
        for (var i = 0; i < this.subscribers.length; i++) {
            this.onGameLoop(this.subscribers[i]);

            if(this.subscribers[i].positionLeft < -130){
                //if enemy ship hits base
                player.addHealth(-this.subscribers[i].damageToBase);
                if(player.health <= 0){
                    Game.pause();
                    alert("GAME OVER!!!");
                }
                document.body.removeChild(this.subscribers[i].dom);
                this.subscribers.splice(i, 1);
                break;
            }

            for(var bullet in bullets){
                //if bullet hits enemy
                if( (bullets[bullet].positionTop > this.subscribers[i].positionTop)
                    && (bullets[bullet].positionTop < (this.subscribers[i].positionTop + this.subscribers[i].planeHeight))
                    && (bullets[bullet].positionLeft > this.subscribers[i].positionLeft)
                    && bullets[bullet].positionLeft < (this.subscribers[i].positionLeft + this.subscribers[i].planeWidth)){

                    //taking health from enemy
                    this.subscribers[i].health -= bullets[bullet].bulletDamage;

                    //addingScorepoints when hitting boss with bullets
                    if(this.subscribers[i].type === ENEMY_TYPE.ENEMY_TYPE_BOSS_LEVEL_1){
                        SCORE_POINTS.SCORE_POINTS += bullets[bullet].bulletDamage;
                    }

                    //if enemy is destroyed
                    if(this.subscribers[i].health <= 0){
                        //adding socre points here
                        SCORE_POINTS.SCORE_POINTS += this.subscribers[i].scorePoints;

                        //if boss is destroyed
                        if(this.subscribers[i].type === ENEMY_TYPE.ENEMY_TYPE_BOSS_LEVEL_1){
                            document.body.removeChild(this.subscribers[i].dom);
                            Game.pause();
                            alert("YOU WIN!!!");
                        }

                        document.body.removeChild(this.subscribers[i].dom);
                        this.subscribers.splice(i, 1);
                    }

                    document.body.removeChild(bullets[bullet].dom);
                    bullets.splice(bullet, 1);

                }
            }
        }
    };

    return EnemyManager;
})(Manager);

