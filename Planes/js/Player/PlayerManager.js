var PlayerManager = (function (parent) {
    'use strict';

    var bulletPossLeft,
        bulletPossTop,
        FIRE_SPEED = 4,
        ONE_SECOND_TIMEOUT = 1000,
        hasShot = false;

    PlayerManager.prototype = Object.create(parent.prototype);

    function PlayerManager() {
        parent.call(this);

        this.moveLeft = false;
        this.moveRight = false;
        this.moveForward = false;
        this.moveBack = false;
        this.isShooting = false;
        this.bulletManager = new BulletManager();
        this.fireSpeed = FIRE_SPEED;
        this.bulletType = BULLET_TYPE.ORANGE_BULLET;
    }

    PlayerManager.prototype.onGameLoop = function (player) {
        if (this.isShooting) {
            if(this.bulletType ==  BULLET_TYPE.ORANGE_BULLET && player.amountOfBullets.orangeBullets > 0 ||
                this.bulletType ==  BULLET_TYPE.BLUE_BULLET && player.amountOfBullets.blueBullets > 0){

                //width and height are reversed becouse it is rotated 90 degrees
                bulletPossLeft = player.positionLeft + player.planeHeight;
                bulletPossTop = player.positionTop + player.planeWidth / 2;

                if (!hasShot) {
                    this.shoot();
                    hasShot = true;
                    setTimeout(function () {
                        hasShot = false;
                    }, ONE_SECOND_TIMEOUT / this.fireSpeed);
                }
            }
        }

        if (this.moveLeft && (player.positionLeft - player.speed) > 0) {
            player.positionLeft -= player.speed;
        }
        if (this.moveRight && (player.positionLeft + player.speed) < Game.getContextValue('width')) {
            player.positionLeft += player.speed;
        }
        if (this.moveForward && (player.positionTop - player.speed) > 0) {
            player.positionTop -= player.speed;
        }
        if (this.moveBack && (player.positionTop + player.speed) < Game.getContextValue('height')) {
            player.positionTop += player.speed;
        }

        player.move();
    };

    PlayerManager.prototype.shoot = function () {
        this.bulletManager.spawn(new Bullet(bulletPossLeft, bulletPossTop, this.bulletType));
    };

    PlayerManager.prototype.publish = function (bullets, enemies) {
        var player = this.subscribers[0];
        this.onGameLoop(player);

        //check if player is hitted by bullet
        for(var bullet in bullets) {
            if ((bullets[bullet].positionTop > player.positionTop)
                && (bullets[bullet].positionTop < (player.positionTop + this.subscribers[0].planeHeight))
                && (bullets[bullet].positionLeft > player.positionLeft)
                && bullets[bullet].positionLeft < (player.positionLeft + player.planeWidth)) {

                //player takes damage
                player.addHealth( -bullets[bullet].bulletDamage );

                document.body.removeChild(bullets[bullet].dom);
                bullets.splice(bullet, 1);

                if(player.health <= 0){
                    alert("GAME OVER!!!");
                    Game.pause();
                    break;
                }
            }
        }

        //if enemy and player ship collide
        for (var en in enemies) {
            var enemy = enemies[en],
                enemyBottom = enemy.positionTop + enemy.planeWidth,
                enemyRight = enemy.positionLeft + enemy.planeHeight,
                enemyVerticalCenter = enemy.positionTop + ( enemy.planeWidth / 2 ),
                enemyHorizontalCenter = enemy.positionLeft + ( enemy.planeHeight / 2);//couse rotated
            //tuff algo o.O checks if enemy top colide, then enemy bottom, then enemy center. Either one doesnt work alone.
            // Probably bugs but I think 3 points from enemy is enought.
            if (
                ( player.positionTop < enemyBottom ) &&
                ( enemyBottom < (player.positionTop + player.planeWidth) ) &&
                ( player.positionLeft < enemyRight ) &&
                ( enemyRight < ( player.positionLeft + player.planeHeight ) ) ||
                ( player.positionTop < enemy.positionTop ) &&
                ( enemy.positionTop < (player.positionTop + player.planeWidth) ) &&
                ( player.positionLeft < enemy.positionLeft ) &&
                ( enemy.positionLeft < ( player.positionLeft + player.planeHeight ) ) ||
                ( player.positionTop < enemyVerticalCenter ) &&
                ( enemyVerticalCenter < (player.positionTop + player.planeWidth) ) &&
                ( player.positionLeft < enemyHorizontalCenter ) &&
                ( enemyHorizontalCenter < ( player.positionLeft + player.planeHeight ) )
            ){

                player.addHealth( -enemy.damageToBase );

                document.body.removeChild(enemy.dom);
                enemies.splice(en, 1);

                if (this.subscribers[0].health <= 0) {
                    alert("GAME OVER!!!");
                    Game.pause();
                    break;
                }
            }
        }

    };

    PlayerManager.prototype.keyboardListener = function (e) {

        var value = e.type == 'keydown';

        switch (e.keyCode) {
            case 37:
                this.moveLeft = value;
                break;
            case 38:
                this.moveForward = value;
                break;
            case 39:
                this.moveRight = value;
                break;
            case 40:
                this.moveBack = value;
                break;
            case 32:
                this.isShooting = value;
                break;
            case 49:
                this.bulletType = BULLET_TYPE.ORANGE_BULLET;
                break;
            case 50:
                this.bulletType = BULLET_TYPE.BLUE_BULLET;
                break;
            default:
                break;
        }
    };

    return PlayerManager;

})(Manager);





