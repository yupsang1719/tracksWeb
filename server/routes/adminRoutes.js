const express = require("express");
const router = express.Router();
const { loginAdmin } = require("../controller/adminController");

router.post("/api/admin/login", loginAdmin);

module.exports = router;
