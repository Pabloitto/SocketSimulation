var http = require("http");
var server = http.createServer(function (request,response) {

    response.writeHead(200, {"Content-Type": "text/plain"})

    response.write('90');
	response.pipe(response);
	response.end();
    /*socket.setEncoding("utf8");
    socket.on('data', function (data) {
        try {
            console.log('Complete');
            socket.write("90");
        } catch (error) {
            socket.write("99");
        }
        socket.end();
    });*/
    //socket.end("OK");
});
server.listen(process.env.PORT ,function () {
    address = server.address();
    console.log("opened server on %j", address);
});