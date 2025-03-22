function logServedPath (req, res, next) {
    console.log(`Served Path: ${filePath}`);
    next();
}

module.exports = logServedPath;