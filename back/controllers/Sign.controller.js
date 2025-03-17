require('dotenv').config({path: '../config/.env'});

const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/User');

const SECRET = process.env.SECRET || '';

const Signup = async(req,res)=>{
    const {fullname, email, password} = req.body;
    const salt = bcryptjs.genSaltSync(10);
    
    try{
        const username = email.split("@")[0];
        const hash = bcryptjs.hashSync(password, salt);
        const UserDoc = await User.create({
            fullname, 
            username,
            email, 
            password: hash
        });
        return res.status(200).json(UserDoc);
    } catch(error){
        return res.status(500).json({"error": `${error}`});
    }
}

const Signin = async(req,res)=>{
    const {email, password} = req.body;
    const userCheck = await User.findOne({email});
    const passCheck = bcryptjs.compareSync(password, userCheck.password);
    const username = userCheck.username;

    if(passCheck){
        jwt.sign({username, id:userCheck._id}, SECRET, {}, (err, token)=>{
            if(err) throw err;
            res.cookie('token', token).json('ok')
        })
    }
    else{
        res.status(400).json('Invalid credentials!');
    }
}

module.exports = {Signup, Signin};