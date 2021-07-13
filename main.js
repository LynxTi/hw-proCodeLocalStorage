const express = require('express');
const path = require('path');


const indexRouter = require('./routes/index');

const server = express();

// view engine setup
server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'ejs');

server.use(express.static(path.join(__dirname, 'public')));

server.use('/', indexRouter);

server.listen('8000');