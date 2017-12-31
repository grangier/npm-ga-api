const http = require("http");
const socketIo = require("socket.io");

const app = require("./app");

const server = http.createServer(app);
const io = socketIo(server);

// handle socket io connection
const ioConnectionHandler = require("./utils/ioConnectionHandler");
ioConnectionHandler(io);

module.exports = server;
