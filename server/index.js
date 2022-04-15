const webServer = require('ws')
const { v4: uuidv4 } = require('uuid');
const wss = new webServer.Server({ port: 3000 })

wss.on('connection', (ws) => {
	ws.id = uuidv4()

	console.log("Connection: " + ws.id);

	ws.on("message", packet => {
		const msg = JSON.parse(packet)
		wss.broadcast(msg.message)
	})

	ws.on('close', () => {
		console.log('disconnected');
	});
})

wss.broadcast = (msg) => {
	wss.clients.forEach(function each(client) {
		client.send(msg);
	})
}