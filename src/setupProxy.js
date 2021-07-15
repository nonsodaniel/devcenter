const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/v2/animals", {
      target: "https://api.petfinder.com",
      changeOrigin: true,
    })
  );
};
