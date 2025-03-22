const { messages } = require('../app');
const asyncHandler = require("express-async-handler");

const postMessage = asyncHandler(async (req, res, next) => {
    const messageText = req.body.messageText;
    const messageUser = req.body.messageUser;

    messages.push({ text: messageText, user: messageUser, added: new Date() });
    res.redirect("/")
});


module.exports = postMessage;