const express = require("express");

const app = express();

// Global Middleware
app.use(express.json());

// Health Check Route
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "healthy",
    message: "StrideX Backend is running successfully.",
    timestamp: new Date().toISOString(),
  });
});

module.exports = app;