const express = require("express");
const app = express();

// defaults routes
const index = require("./routes");
app.use(index);

module.exports = app;
