const express = require("express");
require("dotenv").config();

const cors = require("cors");
const connectDB = require("./config/db");
const app = express();
const path = require("path");


app.use(cors());
app.use(express.json());

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Connect to MongoDB
connectDB();


//user routes
app.use("/api/user", require("./routes/userRoutes"));

//admin routes
app.use("/api/admin", require("./routes/AdminRoutes"));
// Connect to MongoDB
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});