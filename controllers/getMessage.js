const path = require('path');
const asyncHandler = require("express-async-handler");

const { messages } = require('../message');

const getMessage = asyncHandler(async (req, res, next) => {
    // get filepath for the log
    req.filePath = path.join(__dirname, '../views', 'message.ejs');

    // get id from req
    const id = parseInt(req.params.id, 10);

    // debug for invalid id
    if (isNaN(id) || id < 0 || id >= messages.length) {
        return next(new Error('Message not found'));
    }

    // get message detail by index
    const message = messages[parseInt(id)];

    // pass the date to render and the message.ejs
    await res.render('message', { title: "Message Details", message: message });
});


module.exports = getMessage;