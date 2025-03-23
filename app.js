const express = require("express");
const path = require('path');
const app = express();

const logRequest = require('./middleware/logRequest.js');
const logServedPath = require('./middleware/servedPath.js');
const newRouter = require('./routes/newRouter.js');
const indexRouter = require('./routes/indexRouter.js');
const error404 = require('./errors/404.js');
const catchError = require('./errors/catch.js');

const PORT = process.env.PORT || 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// log every request
app.use(logRequest);

// parse the form data into req.body
app.use(express.urlencoded({ extended: true }));

// ready for non html obect
app.use(express.static(path.join(__dirname, 'public')));

// use router to handle
app.use("/", indexRouter);

// use router to handle
app.use("/new", newRouter);

// log the served path
app.use(logServedPath);

// 404 catch-all for non-routed paths
app.use(error404);

// process all the thrown error
app.use(catchError);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});