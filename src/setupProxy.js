// const proxy = require("http-proxy-middleware");

// module.exports = function (app) {
//   const headers = {
//     "Content-Type": "application/json",
//   };
//   app.use(
//     proxy("users/", {
//       target: "https://jsonplaceholder.typicode.com/users",
//       changeOrigin: true,
//       secure: false,
//       headers: headers,
//     })
//   );
// };

const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  const headers = {
    "Content-Type": "application/json",
  };
  app.use(
    "api/v1/list",
    createProxyMiddleware({
      target: "http://localhost:3001/",
      changeOrigin: true,
      secure: false,
      headers: headers,
    })
  );
};
