function logServedPath(req, res, next) {
    console.log(`Served Path: ${req.filePath || 'Not set'}`);
    next();
}

module.exports = logServedPath;