const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const organizationRoutes = require("./modules/organizations/organization.routes");
const userRoutes = require("./modules/users/user.routes");
const errorHandler = require("./middlewares/errorHandler");
const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

app.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Backend is healthy",
  });
});

app.use("/api/v1/organizations",organizationRoutes);

app.use("/api/v1/users", userRoutes);

app.use(errorHandler);

module.exports = app;