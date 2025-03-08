const express = require("express");
const router = express.Router();
const {createUser, loginUser} = require("../controller/UserController");    
const upload = require("../middleware/multer");

router.post("/register",upload.single("picture"), createUser);
router.post("/login", loginUser);

module.exports = router;