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
    });
    res.status(200).json({ message: "room created", room });
});

const getRoom = asyncHandler(async (req, res) => {
    const rooms = await RoomModel.find();
    res.status(200).json({ message: "fetch rooms", rooms });
});

const deleteRoom = asyncHandler(async (req, res) => {
    const room = await RoomModel.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "delete room", room });
});

const updateRoom = asyncHandler(async (req, res) => {
    const {id} = req.params;
    const { roomType, maxCount, price, adult, children, features, facilities, description } =
        req.body;
    const roomImage = req.file?req.file.filename:"";
    const room = await RoomModel.findByIdAndUpdate(id, {
        roomType,
        maxCount,
        price,
        adult,
        children,
        features,
        facilities,
        description,
        roomImage,
    },{new:true});
    res.status(200).json({ message: "room updated", room });
});

//get by id

const getRoomById = asyncHandler(async (req, res) => {
    const room = await RoomModel.findById(req.params.id);
    res.status(200).json({ message: "fetch room", room });
});

module.exports = { createRoom, getRoom, deleteRoom, updateRoom, getRoomById };

