const path = require('path');
const asyncHandler = require("express-async-handler");
// const fs = require('fs').promises;

const { messages } = require('../message');

const indexController = asyncHandler(async (req, res, next) => {
  // get the 
  req.filePath = path.join(__dirname, '../views', 'index.ejs');

  console.log(messages);

  // await throw error when happened, render ejs file directly and pass on title and message 
  await res.render('index', { title: "Mini Messageboard", messages: messages })
});


module.exports = indexController;