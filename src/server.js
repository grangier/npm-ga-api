const http = require("http");
const socketIo = require("socket.io");

const app = require("./app");
// const { ioConnDisconn } = require("./utils/ioConnDisconn");

const server = http.createServer(app);
const io = socketIo(server);
//
// const getApi = require("./lib/api/getApi");
// const rt = require("./lib/api/realtime");
// rt.counter(io)
// rt.pageview(io)
// intervalRT = setInterval(() => rt.pageview(io), 1000 * 5);
// intervalCT = setInterval(() => rt.counter(io), 1000 * 5);
// interval = setInterval(() => getApi(io), 1000 * 30);
//
// ioConnDisconn(io);

module.exports = server;
