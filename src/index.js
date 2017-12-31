const server = require("./server");
const config = require("./config")
const logger = require("./logger")

server.listen(config.port)

logger.debug(`server started ${config.port}`)
