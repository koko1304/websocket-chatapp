const express = require("express");
const socket = require("socket.io");

const app = express();

const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
	console.log("Server listening on port", port);
});

// Setup Web Socket
const io = socket(server);

io.on("connection", socket => {
	socket.on("message", data => {
		io.emit("message", data);
	});

	socket.on("typing", data => {
		socket.broadcast.emit("typing", data);
	});
});
