const express = require("express");
const { createRoom } = require("../controller/RoomController");
const router = express.Router();

const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./uploads");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage: storage });
    

router.post("/createRoom",upload.single("roomImage"), createRoom);

module.exports = router;