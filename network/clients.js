const net = require('net');

function startAll() {
	var randPort = Math.random();
	console.log(randPort);
	var client = new net.Socket();
	client.connect(3000, '127.0.0.1', function () {
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
    startAll()
}