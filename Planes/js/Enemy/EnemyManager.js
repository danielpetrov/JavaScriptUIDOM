var EnemyManager = (function (parent) {
    'use strict';

    EnemyManager.prototype = Object.create(parent.prototype);

    function EnemyManager() {
        parent.call(this);
        this.bulletManager = new BulletManager();
    }

    EnemyManager.prototype.onGameLoop = function (enemy) {
        enemy.move();
        this.shoot(enemy);
    };

    EnemyManager.prototype.shoot = function (enemy){
        var percentage;
        if(enemy.type === ENEMY_TYPE.ENEMY_TYPE_BOSS_LEVEL_1){
            percentage = 0.3;
        } else {
            percentage = 0.1
        }

        if((Math.random() * 100) < percentage){
            this.bulletManager.spawn(new Bullet(enemy.positionLeft, ( enemy.positionTop + (enemy.planeWidth / 4) ), BULLET_TYPE.RED_BULLET, true));
        }
        if((Math.random() * 100) < percentage){
            this.bulletManager.spawn(new Bullet(enemy.positionLeft, ( enemy.positionTop + (enemy.planeWidth / 2) ), BULLET_TYPE.RED_BULLET, true));
        }
    };

    EnemyManager.prototype.publish = function (bullets, player) {
        for (var i = 0; i < this.subscribers.length; i++) {
            this.onGameLoop(this.subscribers[i]);

            if(this.subscribers[i].positionLeft < -130){
                //if enemy ship hits base
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
                    this.subscribers[i].takeDamage(bullets[bullet].bulletDamage);

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
                            break;
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

