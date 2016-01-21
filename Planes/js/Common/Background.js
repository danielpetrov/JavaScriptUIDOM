var Background = function() {
    'use strict';

    var stage = document.querySelector('.stage'),
        windowHeight = window.innerHeight,
        windowWidth = window.innerWidth,
        BACKGROUND_IMAGE = "url('img/space.jpeg')",
        STAGE_MOVING_LEFT_SPEED = 0.35,
        STAGE_MOVING_UP_SPEED = 0.31;

    function initStageElements() {
        stage.style.background = BACKGROUND_IMAGE;
        stage.style.width = windowWidth + 'px';
        stage.style.height = windowHeight + "px";
        stage.style.bottom = 0 + "px";
        stage.style.right = 0 + "px";
    }

    function moveStage() {
        windowHeight += STAGE_MOVING_UP_SPEED;
        windowWidth += STAGE_MOVING_LEFT_SPEED;
        if(windowHeight > 10000){
            windowHeight = window.innerHeight;
            windowWidth = window.innerWidth;
        }
        stage.style.height = windowHeight + "px";
        stage.style.width = windowWidth + "px";
    }

    return {
        init: initStageElements,
        move: moveStage
    };

};