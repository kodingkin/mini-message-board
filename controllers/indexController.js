const path = require('path');
const asyncHandler = require("express-async-handler");
const fs = require('fs').promises;

const { messages } = require('../message');

const indexController = asyncHandler(async (req, res, next) => {
    const filePath = path.join(__dirname, '../views', 'index.ejs'); 
    req.filePath = filePath;
    console.log(`Checking: ${filePath}`);
    await fs.access(filePath);

    res.render('index', { title: "Mini Messageboard", messages: messages })
});


module.exports = indexController;