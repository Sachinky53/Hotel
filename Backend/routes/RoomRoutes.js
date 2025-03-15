const express = require("express");
const { createRoom, getRoomById, updateRoom, deleteRoom, getRoom } = require("../controller/RoomController");
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
router.get("/getRoom", getRoom);
router.delete("/deleteRoom:id", deleteRoom);
router.put("/updateRoom/:id", updateRoom);
router.get("/getRoomById:id", getRoomById);

module.exports = router;