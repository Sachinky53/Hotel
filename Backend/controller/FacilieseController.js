const Facilities = require("../model/FacilitiesModel");
const asyncHandler = require("express-async-handler");

const createFacilities = asyncHandler(async (req, res) => {
    const { title, description } = req.body;
    // console.log(req.body);
    // console.log(req.file);
    const icon  = req.file?req.file.filename:"";
    const facility = await Facilities.create({ title, icon, description });
    res.status(200).json({message:"facility created", facility});
});

const getFacilities = asyncHandler(async (req, res) => {
    const facilities = await Facilities.find();
    res.status(200).json({message:"fetch facilities", facilities});
});

const deleteFacilities = asyncHandler(async (req, res) => {
    const facility = await Facilities.findByIdAndDelete(req.params.id);
    res.status(200).json({message:"delete facility", facility})
});

module.exports = { createFacilities, getFacilities, deleteFacilities };