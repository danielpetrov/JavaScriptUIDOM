var HealthBar = (function () {

    function HealthBar(height, width){
        this.container = document.createElement('div');
        this.container.style.width = width + "px";
        this.container.style.height = height + "px";
        this.container.style.border = "1px solid white";

        this.progress = document.createElement('div');
        this.container.appendChild(this.progress);
        this.progress.style.height = "inherit";
        this.progress.style.width = this.progressWidth + "%";
        this.progress.style.backgroundColor = "green";

        this.flagChangedToYellow = false;
        this.flagChangedToRed = false;
    }

    HealthBar.prototype.setProgress = function(progress){
        this.progressWidth = progress;
        this.progress.style.height = progress + "%";
    };

    HealthBar.prototype.moveProgress = function(progress){
        this.progressWidth += progress;
        if(this.progressWidth < 60 && !this.flagChangedToYellow){
            this.progress.style.backgroundColor = "yellow";
            this.flagChangedToYellow = true;
        }
        if(this.progressWidth <= 30 && !this.flagChangedToRed){
            this.progress.style.backgroundColor = "red";
            this.flagChangedToYellow = true;
        }
        this.progress.style.height = this.progressWidth + "%";
    };

    return HealthBar;
})();