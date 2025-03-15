const express = require("express");
const router = express.Router();
const {createUser, loginUser, authUser, getUser, logoutUser} = require("../controller/UserController");    
const upload = require("../middleware/multer");
const { auth} = require("../middleware/auth");

router.post("/register",upload.single("picture"), createUser);
router.post("/login", loginUser);
router.get("/auth",authUser)
router.get("/getUser",auth, getUser);
//logout routes
router.get("/logout",auth, logoutUser)
module.exports = router; 