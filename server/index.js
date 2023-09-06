const express = require("express");
const app = express();
const port = 5000;
const userRoutes = require("./routes/userRoutes");
const mongoose = require("mongoose");

// ---------- middleware ----------
app.use(express.json());
app.use("/user", userRoutes);
require('dotenv').config();

// ---------- Database Connection ----------
mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    app.listen(port, ()=> {
        console.log(`App run on port ${port}`);
    });
})
.catch((error) =>{
    console.log(error);
});

app.get("/", (req, res) => {
    res.send("successfully work!")
})