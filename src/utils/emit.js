const emit = (socket, data) => {
  socket.emit("FromAPI", data);
};

module.exports = emit;
