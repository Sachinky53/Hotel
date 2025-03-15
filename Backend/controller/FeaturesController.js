const Features = require("../model/Features");
const Facilities = require("../model/Features");
const asyncHandler = require("express-async-handler");
// console.log(Features);

const createFeatures = asyncHandler(async (req, res) => {
    const { title } = req.body;
    //create new feature

    const newFeature = await Features.create({ title });
    const feature = await newFeature.save();
    res.status(200).json({message:"feature created", feature});
});

//get Features

const getFeatures = asyncHandler(async (req, res) => {
    const features = await Features.find();
    res.status(200).json({message:"fetch features", features});
});

//delete feature

const deleteFeature = asyncHandler(async (req, res) => {
    const feature = await Features.findByIdAndDelete(req.params.id);
    res.status(200).json({message:"delete feature", feature})
});



module.exports = { createFeatures, getFeatures, deleteFeature };