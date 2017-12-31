module.exports = {
  port: process.env.GA_API_PORT || 4000,
  debug: (process.env.GA_API_DEBUG ? true : false),
  reports_path: process.env.GA_API_REPORTS_PATH,
};
