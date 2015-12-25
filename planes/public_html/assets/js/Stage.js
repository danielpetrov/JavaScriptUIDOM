var Stage = function() {
	
	var stages = [document.querySelector('.stage')],
		
		stageInterval = null,
	
		stagePositions = [0, 0, 0];
		
		windowHeight = window.innerHeight,
		
		initStageElements = function() {
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
			 
			
		},
		
		animateStage = function() {
			stageInterval = setInterval(moveStage, 10);
		},
		moveStage = function() {
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
			
		};
	
	return {
		init: function() {
			initStageElements();
		},
		moveStage: moveStage
	};
};