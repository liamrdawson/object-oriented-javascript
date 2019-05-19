const button = document.querySelector(`#begin-game`);
const game = new Game();

button.addEventListener(`click`, () => {
    game.startGame();
    button.style.display = `none`;
    document.getElementById(`play-area`).style.opacity = `1`;
    }
);