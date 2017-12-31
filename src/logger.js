const winston = require("winston-color")


// winston.transports.console.level = "info"
winston.transports.console.prettyPrint = true
winston.transports.console.level = "debug"


const debug = (msg) => {
  winston.debug("[ga-api]", `${msg}`)
}

const error = (msg) => {
  winston.error("[ga-api]", `${msg}`)
}

module.exports = { debug, error }
