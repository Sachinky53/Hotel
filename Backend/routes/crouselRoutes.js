const express = require("express");
const { createCrousel, getCrousel, deleteCrousel } = require("../controller/crouselController");
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

router.post("/createCrousel",upload.single("image"), createCrousel);
router.get("/getCrousel", getCrousel);
router.delete("/deleteCrousel:id",deleteCrousel);

module.exports = router;