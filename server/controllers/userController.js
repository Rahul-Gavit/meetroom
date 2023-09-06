const userModel = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "MEETROOM";

const signUp = async (req,res) => {

    
    const {username, email, password} = req.body;

    try{

        // ---------- Check if the password field is empty ----------
        if (!password) {
            return res.status(400).json({ message: "Password is required" });
        }

        // ---------- Existing User Check ----------
    // userModel help us to interact with databases
        const existingUser = await userModel.findOne({email: email});
        if(existingUser){
            return res.status(400).json({message: "User already exist"});
        }

        // ---------- Hashed Password ----------
        const hashedPassword = await bcrypt.hash(password, 10);

        // ---------- Creating New User ----------
        const newUser = await userModel.create({
            username: username,
            email: email,
            password: hashedPassword
        });

        // ---------- Token Generated ----------
        const token = jwt.sign({email: newUser.email, id: newUser._id }, SECRET_KEY);
        res.status(201).json({user: newUser, token: token});
    }

    catch(error){
        console.log(error);
        res.status(500).json({message: "Something went wrong"});
    }
    
}
const signIn = async (req,res) => {

    const {email, password} = req.body;
    try{
        // ---------- User Not exist Check ----------
    const existingUser = await userModel.findOne({email: email});
    if(!existingUser){
        return res.status(404).json({message: "User not exist"});
    }

    // ---------- Match the Password ----------
    const matchPassword = await bcrypt.compare(password, existingUser.password);
    if(!matchPassword){
        res.status(400).json({message: "Invalid password"});
    }

    // ---------- Match the token ----------
    const token = jwt.sign({email: existingUser.email, id: existingUser._id }, SECRET_KEY);
    res.status(201).json({user: existingUser, token: token});

    }
    catch(error){
        console.log(error);
        res.status(500).json({message: "Something went wrong"});
    }
}

module.exports = {signUp, signIn};