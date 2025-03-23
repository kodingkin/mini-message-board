const path = require('path');
const asyncHandler = require("express-async-handler");
// const fs = require('fs').promises;

const { messages } = require('../message');

const indexController = asyncHandler(async (req, res, next) => {

  // get the 
  req.filePath = path.join(__dirname, '../views', 'index.ejs');

  // if use this approach, can customise error and specific out bug is unable to assess rather then rander problem
  // await fs.access(filePath);

  // await throw error when happened, render ejs file directly and pass on title and message 
  await res.render('index', { title: "Mini Messageboard", messages: messages })
});


module.exports = indexController;