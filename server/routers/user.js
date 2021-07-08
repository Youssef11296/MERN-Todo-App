const express = require("express");
const { getUserData } = require("../controllers");
const router = express.Router();

// Get user data
router.get("/", getUserData);

// Export the router
module.exports = router;