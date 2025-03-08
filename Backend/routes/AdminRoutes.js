const express = require("express");
const { getAllUsers } = require("../controller/Admin");
const { isAdmin } = require("../middleware/auth");
const router = express.Router();

router.get('/getAdmin',isAdmin, getAllUsers);

module.exports = router;