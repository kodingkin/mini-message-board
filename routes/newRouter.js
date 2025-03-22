const { Router} = require('express');
const getForm = require('../controllers/getForm.js');
const postMessage = require('../controllers/postMessage.js');

// create the router
const newRouter = Router();

// put the logic into the router
newRouter.get('/', getForm);
newRouter.post('/', postMessage);


module.exports = newRouter;