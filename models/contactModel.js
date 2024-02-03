const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Add Contact Name"],
    },
    email: {
        type: String,
        required: [true, "Add Email Address"],
    },
    phone: {
        type: String,
        required: [true, "Add Contact Number"],
    },
},
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Contact", contactSchema);