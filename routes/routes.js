var express = require('express'); //import module: express
var router = express.Router(); //initialize Router


const { test, newPlayer, putAge, putTrophies, getPlayer, deleteID } = require('../controllers/controllers'); //import test function



router.get('/test', test); //endpoint for test()
router.post('/newPlayer', newPlayer); // router for creating new player
router.put('/:id/age', putAge); // router to add age of the player
router.put('/:id/trophy', putTrophies); // router to add trophies
router.get('/:id', getPlayer); // router to access the information about the player 
router.delete('/:id/delete', deleteID); // router to delete the player

module.exports = router; //export router as module
