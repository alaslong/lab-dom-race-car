class Game {
    constructor () {

        this.startScreen = document.querySelector(`#game-intro`);
        this.gameScreen = document.querySelector(`#game-screen`);
        this.gameEndScreen = document.querySelector(`#game-end`);
        this.player = null;
        this.height = 500;
        this.width = 500
        this.obstacles = [];
        this.score = 0;
        this.lives = 3;
        this.gameIsOver = false;
        this.gameIntervalId = null;
        this.gameLoopFrequency = Math.round(1000/60);

    }

    start () {

        this.gameScreen.style.height = `${this.height}px`;
        this.gameScreen.style.width = `${this.height}px`;

        this.startScreen.style.display = `none`;
        this.gameScreen.style.display = `block`;

        this.gameIntervalId = setInterval(() => {
            this.gameLoop();
        }, this.gameLoopFrequency)


    }

    gameLoop () {

        this.update();
        
        if (this.gameIsOver) {
            clearInterval(this.gameIntervalId);
        }

    }

    update () {

    }
}