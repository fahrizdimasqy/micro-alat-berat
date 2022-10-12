var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var alatRouter = require('./routes/alatberat');
var typeRouter = require('./routes/type');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/alatberat', alatRouter);
app.use('/type', typeRouter);


// app.listen(process.env.PORT || 3000, () => {
//     console.log("Example app listening on http://localhost:3000");
//   });

module.exports = app;