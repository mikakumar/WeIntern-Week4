"use client";


import { useContext, useState } from "react";

import { RiProfileLine } from "react-icons/ri";
import { MdAlternateEmail } from "react-icons/md";
import { FaKey } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { FaEyeLowVision } from "react-icons/fa6";

import { registerFunc } from "./auth";

import { GoldContext } from '../Context';


const SignUp = () => {

    const [tname, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [nameFlip, setNameFlip] = useState(false);
    const [emailFlip, setEmailFlip] = useState(false);
    const [passwordFlip, setPasswordFlip] = useState(false);

    const [passwordVisible, setPasswordVisible] = useState(false);


    const {toggleLogIn} = useContext(GoldContext);

    const nameOn = () =>{
        setNameFlip(true);
    }
    const nameOff = () =>{
        setNameFlip(false);
    }

    const emailOn = () =>{
        setEmailFlip(true);
    }
    const emailOff = () =>{
        setEmailFlip(false);
    }

    const passwordOn = () =>{
        setPasswordFlip(true);
    }

    const passwordOff = () =>{
        setPasswordFlip(false);
    }

    const togglePassword = () =>{
        setPasswordVisible(!passwordVisible);
    }

    const dragUp = () =>{
        registerFunc(tname, email, password);
        toggleLogIn();
    }


    return(
        <>
        <div className="signup-container">
            <form action={dragUp}>
            <div className="mt-[3vh]">
                {!nameFlip && 
                <div>
                <RiProfileLine className="relative text-2xl top-6 text-yellow-800" />
                </div>}
                {nameFlip && 
                <div>
                <RiProfileLine className="relative text-2xl top-6 text-yellow-600" />
                </div>}
                    <input type="name" placeholder="Full Name" className="input-box -mt-[3vh]" onChange={(e)=>setName(e.target.value)} onBlur={nameOff} onFocus={nameOn}/>
                </div>
                <div className="">
                {!emailFlip && 
                <div>
                <MdAlternateEmail className="relative text-2xl top-10 text-yellow-800" />
                </div>
                }
                {emailFlip && 
                <div>
                <MdAlternateEmail className="relative text-2xl top-10 text-yellow-600" />
                </div>
                }
                    <input type="email" placeholder="Email" className="input-box" onChange={(e)=>setEmail(e.target.value)} onBlur={emailOff} onFocus={emailOn} />
                </div>
                {!passwordFlip && 
                    <div>
                        <FaKey className="relative text-xl top-10 left-1 text-yellow-800"/>
                    </div>
                    }
                    {passwordFlip && 
                    <div>
                         <FaKey className="relative text-xl top-10 left-1 text-yellow-600"/>
                    </div>
                    }
                <div>
                    <input type={passwordVisible?"text":"password"} placeholder="Password" className="input-box" onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                {!passwordVisible && 
                <div>
                {!passwordFlip &&
                <div>
                 <FaEye className="eye-con" onClick={togglePassword} />
                </div>
                }
                {passwordFlip &&
                <div>
                 <FaEye className="eye-con-focus" onClick={togglePassword}/>
                </div>
                }
                </div>
                }
                {passwordVisible && 
                <div>
                {!passwordFlip &&
                <div>
                 <FaEyeLowVision className="relative left-67 bottom-10 text-xl text-yellow-800" onClick={togglePassword} />
                </div>
                }
                {passwordFlip &&
                <div>
                 <FaEyeLowVision className="relative left-67 bottom-10 text-xl text-yellow-600" onClick={togglePassword}/>
                </div>
                }
                </div>
                }
               
                <div className="mb-6">
                    <input type="submit" value="Submit" className="form-submit" onBlur={passwordOff} onFocus={passwordOn} />
                   
                </div>
            </form>
        </div>
        </>
    )
}

export default SignUp;