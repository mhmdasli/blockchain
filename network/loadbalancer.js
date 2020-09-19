let net = require("net");

function run() {
	// Server 1
	net.createServer((socket) => {
		socket.write('Echo server\r\n');
		socket.pipe(socket);

		// random 4001,4002,4003
		var randPort = Math.floor(Math.random() * Math.floor(3)) + 4001;
		// establish connection
		establish(randPort);
	}).listen(3000);
	console.log('Loadbalncer listning on 3000');
}

function establish(port) {
	// connect
	var client = new net.Socket();
	client.connect(port, '127.0.0.1', function () {
		console.log('Connected');
		client.write('Hello, server! Love, Client.');
	});

	client.on('data', function (data) {
		console.log('Received: ' + data);
		// kill client after server's response
		client.destroy();
	});

	client.on('close', function () {
		console.log('Connection closed');
	});
}

module.exports.up = () => {
	run()
}