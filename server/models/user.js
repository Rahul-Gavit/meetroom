const mongoose = require("mongoose");

// ---------- Database Model ----------
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

const userSchema = mongoose.Schema({

    username : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true,
        match: [emailRegex, "Invalid email format"]
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        validate: {
            validator: function (password) {
                return password.length >= 6;
            },
            message: "Password must be at least 6 characters long"
        }
    }

}, {timestamps: true});

module.exports = mongoose.model("User", userSchema);