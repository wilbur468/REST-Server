
const shortid = require('shortid'); //import module: shortid

class Players { // Players Class that manages all player data
    constructor() {
        this.players = {};
    }


    //Create a New Player by assigning a Name and Giving it an ID
    create(playerName) {
        const id = shortid.generate(); //generate random id
        let player = { 'Name of the Player': playerName }; // add to hashmap with id
        this.players[id] = player;
        console.log(this.players);
        return id;
    }

    // Add age of the Player based on the PlayerID
    addAge(id, playerAge) {
        this.players[id].age = playerAge;
    }

    // Add age of the Player based on the PlayerID
    addTrophy(id, trophies) {
        this.players[id].trophy = trophies;
    }




}

module.exports = new Players(); //export Players instance as module
