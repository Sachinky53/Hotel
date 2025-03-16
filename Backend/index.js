const express = require("express");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const connectDB = require("./config/db");
const app = express();
const path = require("path");


app.use(cors({
    origin: ["http://localhost:5174","http://localhost:5173"],
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Connect to MongoDB
connectDB();


//user routes
app.use("/api/user", require("./routes/userRoutes"));

//crousel routes
app.use("/api/crousel", require("./routes/crouselRoutes"));

//feature routes
app.use("/api/feature", require("./routes/FetureRoutes"));

//facilities routes
app.use("/api/facilities", require("./routes/FacilitiesRoute"));

//room routes
app.use("/api/room", require("./routes/RoomRoutes"));

//admin routes
app.use("/api/admin", require("./routes/AdminRoutes"));
// Connect to MongoDB
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});