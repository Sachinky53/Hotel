const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
    roomType: {
        type: String,
        enum: ["Deluxe Room", "Luxury Room", "Suite Room"],
        required: true,
    },
    maxCount: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    adult: {
        type: Number,
        required: true,
    },
    children: {
        type: Number,
        required: true,
    },
    features: {
        type: Array,
        required: true,
    },
    facilities: {
        type: Array,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    roomImage: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ["Active", "Inactive"],
        default: "Active",
    },
});

module.exports = mongoose.model("Room", roomSchema);
    