const Crousel = require("../model/crouselModel");
const asyncHandler = require("express-async-handler");

const createCrousel = asyncHandler(async (req, res) => {
    const { title } = req.body;
    // console.log(req.body);

    const image =req.file?req.file.filename:"";
    const crousel = await Crousel.create({ title, image });
    res.status(200).json({message:"crousel created", crousel});
});

const getCrousel = asyncHandler(async (req, res) => {
    const crousel = await Crousel.find();
    res.status(200).json({message:"fetch crousel",crousel});
});

const deleteCrousel = asyncHandler(async (req, res) => {
    const crousel = await Crousel.findByIdAndDelete(req.params.id);
    res.status(200).json({message:"delete crousel",crousel})
});

module.exports = { createCrousel, getCrousel, deleteCrousel };

