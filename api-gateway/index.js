const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const app = express();

app.use(
  "/users",
  createProxyMiddleware({
    target: "http://localhost:3001", // Replace with your actual User Service URL
    changeOrigin: true,
  })
);
app.use(
  "/search",
  createProxyMiddleware({
    target: "http://localhost:3002", // Replace with your actual User Service URL
    changeOrigin: true,
  })
);
app.use(
  "/note",
  createProxyMiddleware({
    target: "http://localhost:3003", // Replace with your actual User Service URL
    changeOrigin: true,
  })
);

app.listen(8080, () => console.log("API Gateway running on port 8080"));
