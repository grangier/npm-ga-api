const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("GA API pong").status(200);
});


const {reporting} = require('../controllers')

router.get("/analytics/report", reporting.get_reports);

module.exports = router;
