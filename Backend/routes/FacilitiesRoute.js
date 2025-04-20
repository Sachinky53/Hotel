const express = require("express");
const { createFacilities, getFacilities, deleteFacilities } = require("../controller/FacilieseController");
const router = express.Router();

console.log("hello", typeof (createFacilities));
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

router.post("/createFacilities",upload.single("icon"), createFacilities);
router.get("/getFacilities", getFacilities);
router.delete("/deleteFacilities/:id", deleteFacilities);

module.exports = router;