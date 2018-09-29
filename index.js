var app = require('express')() 
var server = require('http').Server(app) 
var io = require('socket.io')(server)

server.listen(8008, err => {
	if (err) throw err;
		console.log('Now listening on', server.address());
});

app.use(require('express').static('static'))

io.on('connection', function(socket) {
	socket.on('position', function(data) {
		console.log('position...', data);
		io.emit('clients', data)
	});
});
