const RoomModel = require("../model/RoomModel");
const asyncHandler = require("express-async-handler");

const createRoom = asyncHandler(async (req, res) => {
    const { roomType, maxCount, price, adult, children, features, facilities, description } =
        req.body;
    const roomImage = req.file?req.file.filename:"";
    const room = await RoomModel.create({
        roomType,
        maxCount,
        price,
        adult,
        children,
        features,
        facilities,
        description,
        roomImage,
        status: status || "Active",
    });
    res.status(200).json({ message: "room created", room });
});

module.exports = { createRoom };