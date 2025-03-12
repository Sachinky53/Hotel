const mongoose = require("mongoose");

const featureSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
    }
});


const Features = mongoose.model("Feature", featureSchema);


module.exports = Features;
