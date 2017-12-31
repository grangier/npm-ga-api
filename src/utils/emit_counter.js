const emit = (socket, data, type = 'counter') => {
  const msg = type == 'counter' ?  "RLT:COUNTER" : "RLT:PAGEVIEW"
  console.log("emit::",msg)
  socket.emit(msg, data);
};

module.exports = emit;
