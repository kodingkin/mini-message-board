const { Router} = require('express');
const indexController = require('../controllers/indexController.js');
const getMessage = require('../controllers/getMessage.js')

// create the router
const messageRouter = Router();

// put the logic into the router
messageRouter.get('/',indexController);

messageRouter.get('/message/:id', getMessage);

module.exports = messageRouter;