function logRequest (req, res, next) {
    console.log(`Request: ${req.method} from ${req.url}`);
    next();
}

module.exports = logRequest;