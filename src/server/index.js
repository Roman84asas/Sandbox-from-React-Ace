const app = require('http').createServer();
const io = require('socket.io')(app);

app.listen(3030);

io.on('connection', function (socket) {
    console.log('conected');
    socket.on('CHANGE_CLIENT', function (data) {
        socket.broadcast.emit('CHANGE_SERVER', data);
    });
});