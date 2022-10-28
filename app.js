require('dotenv').config();
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const alatberatRouter = require("./routes/alatberat")
const typeAlatRouter = require("./routes/type_alat")
const refreshTokensRouter = require('./routes/refreshTokens');
const verifyToken = require('./middlewares/verifyToken')

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/alatberat', alatberatRouter);
app.use('/type', typeAlatRouter);
app.use('/refresh-tokens', refreshTokensRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    console.log(process.env.port)

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;