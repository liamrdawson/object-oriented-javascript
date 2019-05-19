class Game {
    constructor() {
        this.board = new Board();
        this.players = this.createPlayers();
        this.ready = false;
    }
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
    startGame(){
        //  call the drawHTMLBoard() method on an object
        this.board.drawHTMLBoard();
        //  call the drawHTMLToken() method on the activeToken. Use the getter methods for this.
        this.activePlayer.activeToken.drawHTMLToken();
        //  change the value of the Game objects ready property to true.
        this.ready = true;
    };
}