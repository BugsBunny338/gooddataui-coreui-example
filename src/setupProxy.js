const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy(['/gdc', '/packages'], {
    changeOrigin: true,
    cookieDomainRewrite: "localhost",
    secure: false,
    target: 'https://developer.na.gooddata.com',
    headers: {
      host: 'developer.na.gooddata.com',
      origin: null
    }
  }));
};
