require('dotenv').config({path: '../config/.env'});

const User = require('../models/User');

const Signup = async(req,res)=>{
    const {fullname, email, password} = req.body;
    try{
        const UserDoc = await User.create({
            fullname, 
            email, 
            password
        });
        return res.status(200).json(UserDoc);
    } catch(error){
        return res.status(500).json({"error": `${error}`});
    }
}

const Signin = async(req,res)=>{

}

module.exports = {Signup, Signin};