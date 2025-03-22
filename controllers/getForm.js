const path = require('path');
const asyncHandler = require("express-async-handler");
const fs = require('fs').promises;

const getForm = asyncHandler(async (req, res, next) => {

    const filePath = path.join(__dirname, '/views/form.ejs');
    req.filePath = filePath;
    await fs.access(filePath);

    res.render(form);
});


module.exports = getForm;