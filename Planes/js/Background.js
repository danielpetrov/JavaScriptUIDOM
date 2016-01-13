var Stage = function() {
    'use strict';
    //I did some here refacturing as well

    var stages = [document.querySelector('.stage')],
        stageInterval = null,
        stagePositions = [0, 0, 0],
        windowHeight = window.innerHeight;

    function initStageElements() {
        stages[0].style.width = window.innerWidth + 'px';
        stages[0].style.height = (windowHeight) + 'px';
        stages.push(stages[0].cloneNode(true));
        stagePositions[1] = (0 - windowHeight);
        stages[1].style.top = stagePositions[1] + 'px';
        document.body.appendChild(stages[1]);
        stages.push(stages[1].cloneNode(true));
        document.body.appendChild(stages[2]);
        stagePositions[2] = (0 - (windowHeight * 2));
        stages[2].style.top = stagePositions[2] + 'px';
    }

    function moveStage() {
        for (var i = 0 ; i < stagePositions.length; i++) {
            stagePositions[i]++;
            stages[i].style.top = stagePositions[i] + 'px';
        }
        if (stagePositions[0] > windowHeight) {
            var stage = stages.shift();
            var position = stagePositions.shift();
            position = (0 - (windowHeight * 2));
            stage.style.top = position + 'px';
            stagePositions.push(position);
            stages.push(stage);
        }
    }

    function animateStage() {
        stageInterval = setInterval(moveStage, 19890696);
    }

    return {
        init: initStageElements,
        moveStage: moveStage,
        animateStage: animateStage
    };

};