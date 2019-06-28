const app = require('http').createServer();
const io = require('socket.io')(app);

app.listen(3030);

io.on('connection', function (socket) {
    console.log('conected');

    socket.on('JOIN_ROOM', function (room) {
        socket.join(room);
    });
    socket.on('CHANGE_CLIENT', function (data) {
        socket.broadcast.to(data.room).emit('CHANGE_SERVER', data.code);
    });
});