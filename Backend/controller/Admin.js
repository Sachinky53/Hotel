const User = require("../model/UserModel");

const getAllUsers = async (req, res) => {
    const users = await User.find();
    if (!users) {
        return res.status(404).json({ message: "No users found" });
    }


    res.status(200).json(users);
};

module.exports = { getAllUsers };