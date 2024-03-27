const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/jobs',
    createProxyMiddleware({
      target: 'http://localhost:8099', 
      changeOrigin: true,
    })
  );
};
