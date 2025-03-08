const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phoneNumber: {
        type: Number,
        required: true,
        
    },
    picture:{
        type: String,
        required: true,
    },
    pincode: {
        type: Number,
        required: true,  
    },

    password: {
        type: String,
        required: true,
    },
    confirmPassword: {
        type: String,
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false,
    },
    role: {
        type: String,
        required: true,
        enum: ["user", "admin"],    
        default: "user",
    },
});

module.exports = mongoose.model("User", userSchema);
