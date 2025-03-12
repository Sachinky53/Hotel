const express = require("express");
const { createFeatures, createFacilities, getFeatures, deleteFeature } = require("../controller/FeaturesController");
const router = express.Router();

// console.log("hello", typeof (createFeatures));

// const upload = require("../middleware/multer");



router.post("/createFeature", createFeatures);
router.get("/getFeature", getFeatures);
router.delete("/deleteFeature:id", deleteFeature);


module.exports = router;