const path = require('path');
const asyncHandler = require("express-async-handler");
const fs = require('fs').promises;

const { messages } = require('../message');

const getForm = asyncHandler(async (req, res, next) => {

    req.filePath = path.join(__dirname, '../views/form.ejs');

    await res.render('form', { title: "Mini Messageboard", messages: messages });
});


module.exports = getForm;