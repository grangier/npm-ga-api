const express = require("express");
const index = require("./routes");

const app = express();
app.use(index);

module.exports = app;
