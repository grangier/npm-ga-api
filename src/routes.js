const _ = require('lodash');
const path = require("path")
const fs = require('fs');
const express = require("express");
const router = express.Router();
// 
// const reports = require('/Users/maclibe/github/analytics-reporter/reports/reports.json').reports
//
// const {api_get_report} = require('./lib/api/realtime')
//
// bla_reports = function(req, res) {
//   const out = api_get_report(req, res)
//   res.json({ reports: out });
// };
//
//
//
// list_reports = function(req, res) {
//   function square(n) {
//     return _.merge({id: n.name}, n.meta)
//   }
//   const out = _.map(reports, square)
//   res.json({ reports: out });
// };
//
// get_report = function(req, res) {
//   const {report_name} = req.params
//   const format = "json"
//   const output = "/Users/maclibe/github/analytics-reporter/tmp/"
//   const filename = `${report_name}.${format}`
//   const filepath = path.join(output, filename)
//   fs.readFile(filepath, 'utf8', function (err, data) {
//       if (err) throw err; // we'll not consider error handling for now
//       const report = JSON.parse(data);
//       res.json(report);
//   });
// };


router.get("/", (req, res) => {
  res.send("I am alive").status(200);
});

// router.get("/analytics/report", api_get_report);
// router.get("/analytics/reports", list_reports);
// router.get("/analytics/reports/:report_name", get_report);

module.exports = router;
