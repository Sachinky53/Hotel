
const User = require("../model/UserModel");
const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const createUser = asyncHandler(async (req, res) => {
    const { name, email, phoneNumber, pincode, password, confirmPassword} = req.body;

    //checking confirm password
    if (password !== confirmPassword) {
        res.status(400);
        throw new Error("Passwords do not match");
    }

    if (!name || !email || !phoneNumber || !pincode || !password) {
        res.status(400);
        throw new Error("Please fill all the fields");
    }

    //check user exists
    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(400);
        throw new Error("User already exists");
    }

    //file path
    const picture = req.file?req.file.filename:"";
    console.log(picture);

    //hashed password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);


    const user = await User.create({
        name,
        email,
        phoneNumber,    
        picture,
        pincode,
        password: hashedPassword,
        role
    });



    res.status(201).json({
        success: true,
        user,
        message: "User Registered successfully",
    });
}); 

//login user

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400);
        throw new Error("Please fill all the fields");
    }

    const user = await User.findOne({ email });

    if (!user) {
        res.status(400);
        throw new Error("User does not exist");
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        res.status(400);
        throw new Error("Invalid credentials");
    }
    //token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "1d",
    });


    //token cookie
    res.cookie("token", token, {
        httpOnly: true,
        expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
        secure: false,
    })
    res.status(200).json({
        success: true,
        user,
        token,
        message: "User logged in successfully",
    });
});


module.exports = { createUser, loginUser };

