const logger = require("../logger")


const clientList = io => {
  let clientList = [];
  for (let key in io.sockets.clients().connected) {
    clientList.push(key);
    logger.debug(`[io] list ${clientList.length}`)
  }
  return clientList.length;
};

let interval;


// setInterval(() => getApi(), 5000)

const ioConnectionHandler = io => {
  io.on("connection", socket => {
    // Update the clients list
    logger.debug(`[io] connected ${socket.id}`)
    clientList(io);
    // if (interval) {
    //   clearInterval(interval);
    // }
    // interval = setInterval(() => getApi(socket), 5000);
    socket.on("disconnect", () => {
      // Clear the interval if there is no connected client
      logger.debug(`[io] disconnected ${socket.id}`)
      // if (!clientList(io)) {
      //   clearInterval(interval);
      // }
    });
  });
};

//
// let interval;
// io.on("connection", socket => {
//   console.log("New client connected");
//   if (interval) {
//     clearInterval(interval);
//   }
//   interval = setInterval(() => getApiAndEmit(socket), 10000);
//   socket.on("disconnect", () => {
//     console.log("Client disconnected");
//   });
// });

module.exports = ioConnectionHandler;
