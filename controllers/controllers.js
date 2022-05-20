
const player = require('../models/models'); // import module : player module

class Controllers { //class: Controllers
    test(request, response) { //instance method: test
        response.json({ 'success': true }); //send JSON data
    }

    getPlayer(request, response) {
        const id = request.params.id; // get ID of the player from request Params
        try {
            response.json(player.players[id]); //send JSON data
        }
        catch {
            response.json({ "success": false });
        }
    }


    newPlayer(request, response) {
        const { playerName } = request.body;
        const id = player.create(playerName); // invoke create method
        response.json({ 'playerID': id }); //send JSON data
    }

    putAge(request, response) {
        const age = request.body.age; //get age from request parameters
        const id = request.params.id; //get id from request parameters
        console.log(age);
        console.log(id);
        try {
            player.addAge(id, age); // add age with the associated id
            response.json({ "success": true }); // send JSON Data
        }
        catch {
            response.json({ "sucess": false });
        }
    }

    putTrophies(request, response) {
        const trophy = request.body.trophy; //get trophies from request parameters
        const id = request.params.id; //get id from request parameters
        console.log(trophy);
        console.log(id);
        try {
            player.addTrophy(id, trophy); //add trophy with associated id
            response.json({ "success": true }); //send JSON Data
        }
        catch {
            response.json({ "sucess": false });
        }
    }



    deleteID(request, response) {
        const id = request.params.id; //get ID from the request Parameters
        console.log(id);
        console.log(player.players);
        try {
            delete player.players[id]; //Delete the id of the player
            response.json({ "success": true }); // send JSON Data
        }
        catch {
            response.json({ "success": false });
        }
    }



}

module.exports = new Controllers(); // export Controller instance as module