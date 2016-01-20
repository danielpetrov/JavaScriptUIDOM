var Stage = function() {
    'use strict';

    var stage = document.querySelector('.stage'),
        windowHeight = window.innerHeight;

    function initStageElements() {
        stage.style.background = "url('img/space.jpeg')";
        stage.style.width = window.innerWidth + 'px';
        stage.style.height = windowHeight + "px";
        stage.style.bottom = 0 + "px";
    }

    function moveStage() {
        windowHeight += 0.36;
        if(windowHeight > 10000){
            windowHeight = 5000;
        }
        stage.style.height = windowHeight + "px";
    }

    return {
        init: initStageElements,
        moveStage: moveStage
    };

};