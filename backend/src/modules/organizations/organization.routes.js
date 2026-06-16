const express = require("express");

const organizationController = require(
  "./organization.controller"
);

const router = express.Router();

router.post(
  "/",
  organizationController.createOrganization
);

module.exports = router;