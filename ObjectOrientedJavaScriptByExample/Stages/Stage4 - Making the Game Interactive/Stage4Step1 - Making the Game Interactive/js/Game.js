class Game {
    constructor() {
        this.board = new Board();
        this.players = this.createPlayers();
        this.ready = false;
    }
    
    
    /** 
     * Returns active player.
     * @return  {Object}    player - The active player.
     */
	get activePlayer() {
        return this.players.find(player => player.active);
	}
    
    
    /** 
     * Creates two player objects
     * @return  {array}    An array of two player objects.
     */
    createPlayers() {
        const players = [new Player('Player 1', 1, '#e15258', true),
                         new Player('Player 2', 2, '#e59a13')];
        return players;
    }
    
    
    /** 
     * Initializes game. 
     */
    startGame(){
        this.board.drawHTMLBoard();
        this.activePlayer.activeToken.drawHTMLToken();
        this.ready = true;
    }

    handleKeydown(e) {
        if (this.ready) {
            if (e.key === 'ArrowLeft') {
                this.activePlayer.activeToken.moveLeft();
            } else if (e.key === 'ArrowRight') {
                this.activePlayer.activeToken.moveRight(this.board.columns);
            } else if (e.key === 'ArrowDown') {
                playtoken();
            }
        }
    }

    playToken() {
        let spaces = this.board.spaces;
        let activeToken = this.Player.activeToken;
        let targetColumn = spaces[activeToken.columnLocation];
        let targetSpace = null;

        for (let space of targetColumn) {
            if (space.token === targetColumn){
                targetSpace = space;
            }
        }

        if (target.space !== null) {
            game.ready = false;
            activeToken.drop(targetSpace);
        }
    }
}