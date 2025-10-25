"use strict";

/** Express app for Jobly. */

const express = require("express");
const cors = require("cors");
const path = require("path");
const morgan = require("morgan");

const { NotFoundError } = require("./expressError");
const { authenticateJWT } = require("./middleware/auth");

const authRoutes = require("./routes/auth");
const companiesRoutes = require("./routes/companies");
const usersRoutes = require("./routes/users");
const jobsRoutes = require("./routes/jobs");

const app = express();

// Enable CORS and JSON body parsing
app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));

// Authenticate JWT for all routes
app.use(authenticateJWT);

// API routes
app.use("/auth", authRoutes);
app.use("/companies", companiesRoutes);
app.use("/users", usersRoutes);
app.use("/jobs", jobsRoutes);

// 404 handler for API routes
app.use(function (req, res, next) {
  return next(new NotFoundError());
});

// Generic error handler
app.use(function (err, req, res, next) {
  if (process.env.NODE_ENV !== "test") console.error(err.stack);
  const status = err.status || 500;
  const message = err.message;
  return res.status(status).json({ error: { message, status } });
});

module.exports = app;
