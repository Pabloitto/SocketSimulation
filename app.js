var net = require("net");
var tcp_server = net.createServer(function (socket) {
    socket.setEncoding("utf8");
    socket.on('data', function (data) {
        var delay = Math.floor((Math.random() * 20) + 1) * 1000;
        console.log('Estimated time ' + delay);
        setTimeout(function () {
            try {
                console.log('Complete');
                socket.write("90");
            } catch (error) {
                socket.write("99");
            }
        }, delay);
    });
});
tcp_server.listen(process.env.port || 8000);