const app = require('http').createServer();
const io = require('socket.io')(app);

app.listen(3030);

io.on('connection', function (socket) {
    console.log('conected');

    socket.on('CHANGE_CONNECT', function (data) {
        socket.join(data);
    });
    socket.on('CHANGE_CLIENT', function (id, data) {
        socket.broadcast.to(id).emit('CHANGE_SERVER', data);
    });
});