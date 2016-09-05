var net = require("net");
var server = net.createServer(function (socket) {
    socket.setEncoding("utf8");
    socket.on('data', function (data) {
        try {
            console.log('Complete');
            socket.write("90");
        } catch (error) {
            socket.write("99");
        }
        socket.end();
    });
});
server.listen(process.env.PORT ,function () {
    address = server.address();
    console.log("opened server on %j", address);
});