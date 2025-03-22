function catchError (req, res, err, next) {
    console.log(`Error: ${err.message}`);
    const status = err.message === 'Page not found' ? 404 : 500;
    res.status(status).send(`${status} - ${err.message} - check log!`);
}

module.exports = catchError;