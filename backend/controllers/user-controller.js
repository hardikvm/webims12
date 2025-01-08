const User = require('../model/user');
const bcrypt = require('bcryptjs');
const jwt=require("jsonwebtoken")
const getAllUser = async (req, res, next) => {
    // let users;
    // try{
    //     users = await User.find();
    // }catch(err){
    //     console.log(err);
    // }
    // if(!users){
    //     return res.status(404).json({message: 'User Not Found'});
    // }
    return res.status(200).send("hello wwwmmm hjjj");
};

const signup = async (req, res, next) => {
    const { name, password, email } = req.body;

    let existinguser;
    try {
        existinguser = await User.findOne({ email });
    } catch (err) {
        return console.log(err);
    }

    if (existinguser) {
        return res.status(400).json({ error: "user already exist" });
    }

    const hashedpassword = bcrypt.hashSync(password);

    const user = new User({
        name,
        password: hashedpassword,
        email
    });

    try {
        await user.save();
    } catch (err) {
        return console.log(err);
    }
    const token = jwt.sign({ email }, 'your_secret_key');
    return res.status(201).json({ token});
};

const login = async (req, res, next) => {
    const { password, email } = req.body;
    let existinguser;
    try {
        existinguser = await User.findOne({ email });
    } catch (err) {
        return console.log(err);
    }

    if (!existinguser) {
        return res.status(404).json({ message: "couldn't find user by this email" });
    }

    const ispassword = bcrypt.compareSync(password, existinguser.password);
    if (!ispassword) {
        return res.status(400).json({ message: "Type correct password" });
    }
    const token = jwt.sign({ email }, 'your_secret_key');
    return res.status(200).json({ token:token });
};

module.exports = { getAllUser, signup, login };