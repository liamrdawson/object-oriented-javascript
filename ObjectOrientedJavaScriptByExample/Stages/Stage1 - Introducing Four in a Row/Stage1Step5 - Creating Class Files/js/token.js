/*
How will you differentiate between token objects? How can you use the Player ID to create a token identifier?
    Differentiate between token objects using a numeric id 

How will you keep track of which player an individual token belongs to?
    Use color value to separate tokens between player

How will you know if a token has been played or not? 
    Could create a played tokens array and use a setter method to update the value
*/

class Token {
    constructor(owner, index) {
        this.owner = owner;
        this.id = `token-${index}-${owner.id}`;
        this.dropped = false;
    }
}