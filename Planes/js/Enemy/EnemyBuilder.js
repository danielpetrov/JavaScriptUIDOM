var EnemyBuilder = (function (enemyLevel1, bossLevel1, parent) {
    'use strict';

    var ENEMY_DOM_CLASS = 'enemy';

    EnemyBuilder.prototype = Object.create(parent.prototype);

    function EnemyBuilder(positionTop, type) {
        this.type = type;

        switch(this.type){
            case ENEMY_TYPE.ENEMY_TYPE_LEVEL_1:
                enemyLevel1.call(this, positionTop);
                break;
            case ENEMY_TYPE.ENEMY_TYPE_BOSS_LEVEL_1:
                bossLevel1.call(this, positionTop);
                break;
            default:
                enemyLevel1.call(this, positionTop);
                break;
        }

        this.maxHealth = this.health;
        this.HealthBar = new HealthBar(this.planeWidth/2, 5);
        this.HealthBar.setProgress(100);
        this.dom.appendChild(this.HealthBar.container);
    }

    EnemyBuilder.prototype.move = function () {
        switch(this.type){
            case ENEMY_TYPE.ENEMY_TYPE_LEVEL_1:
                enemyLevel1.prototype.move.call(this);
                break;
            case ENEMY_TYPE.ENEMY_TYPE_BOSS_LEVEL_1:
                bossLevel1.prototype.move.call(this);
                break;
            default:
                enemyLevel1.prototype.move.call(this);
                break;
        }
    };

    EnemyBuilder.prototype.getCssClass = function () {
        return ENEMY_DOM_CLASS;
    };

    EnemyBuilder.prototype.takeDamage = function (damage) {
        //moves health progress with percent of the health
        this.HealthBar.moveProgress( -((damage / this.maxHealth) * 100) );
        this.health -= damage;
    };

    return EnemyBuilder;

})(EnemyLevel1Builder, BossLevel1Builder, WorldObject);