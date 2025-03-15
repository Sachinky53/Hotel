
const User = require("../model/UserModel");
const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const createUser = asyncHandler(async (req, res) => {
    const { name, email, phoneNumber, pincode, password, confirmPassword} = req.body;

    //checking confirm password
    // console.log(password, confirmPassword);
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
    // console.log(picture);

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
        //expires in 10 seconds
        expires: new Date(Date.now() + 10 * 1000),
        secure: false,
    })
    res.status(200).json({
        success: true,
        user,
        token,
        message: "User logged in successfully",
    });
});

//auth user logged in
const authUser = asyncHandler(async (req, res) => {
    try {
        const token = req.cookies.token || req.header("Authorization")?.replace("Bearer ", "");
        // console.log("get",token);
        if (!token) {
            res.status(401);
            throw new Error("Not authorized");
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.id);
        res.status(200).json({
            success: true,
            user,
            message: "User authenticated in successfully",
        });
    } catch (error) {
        res.status(401);
        throw new Error("Not authorized");
    }
})

//get user

const getUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user.id);
    res.status(200).json({
        success: true,
        user,
        message: "User fetched in successfully",
    });
});

// logout user
const logoutUser = asyncHandler(async (req, res) => {
    // console.log(req.user.id);
    await User.findByIdAndUpdate(req.user.id);
    res.clearCookie("token");
    res.status(200).json({
        success: true,
        message: "User logged out successfully",

    })
    // res.cookie("token", null, {
    //     httpOnly: true,
    //     expires: new Date(Date.now()),
    //     secure: false,
    // });
    // res.status(200).json({
    //     success: true,
    //     message: "User logged out successfully",
    // });
})

module.exports = { createUser, loginUser, authUser, getUser, logoutUser };

