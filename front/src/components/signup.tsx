"use client";


import { useContext, useState } from "react";

import { MdAlternateEmail } from "react-icons/md";
import { FaKey } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { FaEyeLowVision } from "react-icons/fa6";

import { FaGoogle } from "react-icons/fa";

import { GoldContext } from '../Context';
import { registerFunc } from "./auth";

const SignUp = () => {

    const [tname, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {toggleLogIn} = useContext(GoldContext)

    const dragUp = () =>{
        registerFunc(tname, email, password);
        toggleLogIn();
    }


    return(
        <>
        <div className="signup-container">
            <form action={dragUp}>
            <div className="mt-[3vh]">
                    <input type="name" placeholder="Full Name" className="input-box" onChange={(e)=>setName(e.target.value)} />
                </div>
                <div className="mt-[4vh]">
                    <input type="email" placeholder="Email" className="input-box" onChange={(e)=>setEmail(e.target.value)} />
                </div>
                <div className="mt-[4vh]">
                    <input type="password" placeholder="Password" className="input-box" onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <div className="my-6">
                    <input type="submit" value="Submit" className="form-submit" />
                </div>
            </form>
        </div>
        </>
    )
}

export default SignUp;