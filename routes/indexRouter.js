const { Router} = require('express');
const indexController = require('../controllers/indexController.js');

// create the router
const messageRouter = Router();

// put the logic into the router
messageRouter.get('/',indexController);

module.exports = messageRouter;