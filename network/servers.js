let net = require("net");
const { exec } = require('child_process');

function startAll() {
	// Server 1
	net.createServer((socket) => {
		socket.write('Echo server\r\n');
		socket.pipe(socket);
	}).listen(4001);
	console.log('Server 1 listning on 4001');

	// Server 2
	net.createServer((socket) => {
		socket.write('Echo server\r\n');
		socket.pipe(socket);
	}).listen(4002);
	console.log('Server 2 listning on 4002');

	// Server 3
	net.createServer((socket) => {
		socket.write('Echo server\r\n');
		socket.pipe(socket);
	}).listen(4003);
	console.log('Server 3 listning on 4003');

}

module.exports.up = () => {startAll()}