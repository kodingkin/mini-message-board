const { messages } = require('../message');
const asyncHandler = require("express-async-handler");

const postMessage = asyncHandler(async (req, res, next) => {
    const messageText = req.body.messageText;
    const messageUser = req.body.messageUser;
   
    messages.push({ id: (messages.length), text: messageText, user: messageUser, added: new Date() });
    res.redirect("/")
});


module.exports = postMessage;