var Stage = function() {
    'use strict';

    var stage = document.querySelector('.stage'),
        windowHeight = window.innerHeight,
        windowWidth = window.innerWidth;

    function initStageElements() {
        stage.style.background = "url('img/space.jpeg')";
        stage.style.width = windowWidth + 'px';
        stage.style.height = windowHeight + "px";
        stage.style.bottom = 0 + "px";
        stage.style.right = 0 + "px";
    }

    function moveStage() {
        windowHeight += 0.35;
        windowWidth += 0.31;
        if(windowHeight > 10000){
            windowHeight = window.innerHeight;
            windowWidth = window.innerWidth;
        }
        stage.style.height = windowHeight + "px";
        stage.style.width = windowWidth + "px";
    }

    return {
        init: initStageElements,
        moveStage: moveStage
    };

};