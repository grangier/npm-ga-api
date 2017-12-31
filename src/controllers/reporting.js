const fs = require('fs');
const path = require("path")
const glob = require("glob")
const config = require('../config')
const logger = require('../logger')


const _getReportFiles = (patt) => {
  const pattern = path.join(
    config.reports_path,
    patt
  )
  return new Promise((resolve, reject) => {
    glob(pattern, function (err, files) {
      if (err) {
        logger.error(err)
        reject()
      }
      resolve(files)
    })
  })
}


const _readReport = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) {
        logger.error(err)
        reject()
      }
      resolve(JSON.parse(data))
    })
  })
}


exports.get_reports = function(req, res) {
  const patt = '*.json'
  _getReportFiles(patt)
    .then(files => {
      const reports = files.map( f => _readReport(f))
      return Promise.all(reports).then(function(results) {
        return results
      })
    })
    .then(reports => {
      return res.json(reports)
    })
    .catch(err => {
      logger.error(err)
      res.status(500).send('Something broke!');
    })
}
