/*
How will you differentiate between player objects? Will players have a name, or an ID? How would an ID be created or set?
    Provide each player with a name corresponding to the token e.g. Yellow Player, Red Player
    
How will a player's tokens be stored? How many tokens should each player have? How will you store or set that number?
    Store the tokens in a variable in the object

How will each player's tokens be differentiated from the other player's, visually?
    By color e.g.  red and yellow tokens

What are some ways to keep track of whose turn it is?

*/


class Player {
    constructor(name, id, color, active = false){
        this.name = name;
        this.id = id;
        this.color = color;      
        this.active = active;  
        this.tokens = createTokens(21);
    }
//  Creates token objects for the player
    createTokens(num) {
        const tokens = [];
        for (let i = 0; i<num; i++) {
            let token = new Token(id, this);
            tokens.push(token);
        }
        return tokens;
    }
} 