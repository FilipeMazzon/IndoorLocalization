'use strict';
var app = require('./config/server');
var port = 3030;
var server = app.listen(port, function () {
    console.log("servidor rodando com Express na porta:" + port);
});
var io = require('socket.io').listen(server);
app.set('io',io);
io.on('connection', function (socket) {
    console.log("usuario conectou");
    socket.on('disconnect', function () {
        console.log('usuario desconectou');
    });
});
