require('dotenv').config();
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
<<<<<<< HEAD
const alatberatRouter = require("./routes/alatberat")
const typeAlatRouter = require("./routes/type_alat")
=======
>>>>>>> 79f4351b8f3a735e069d0a080ac4520723ffa3f7
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
<<<<<<< HEAD
app.use('/alatberat', alatberatRouter);
app.use('/type', typeAlatRouter);
=======
>>>>>>> 79f4351b8f3a735e069d0a080ac4520723ffa3f7
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
<<<<<<< HEAD
    console.log(process.env.port)
=======
>>>>>>> 79f4351b8f3a735e069d0a080ac4520723ffa3f7

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;