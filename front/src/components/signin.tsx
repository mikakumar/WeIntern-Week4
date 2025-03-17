"use client";

import { useContext, useState } from "react";

import { auth, gAuth } from "@/api/firebase-config";
import { signInWithPopup } from "firebase/auth";
import { signInFunc} from "./auth";


import { MdAlternateEmail } from "react-icons/md";
import { FaKey } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { FaEyeLowVision } from "react-icons/fa6";

import { GoldContext } from "../Context";


const SignIn = () =>{

    const {toggleLogIn} = useContext(GoldContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [emailFlip, setEmailFlip] = useState(false);
    const [passwordFlip, setPasswordFlip] = useState(false);

    const [passwordVisible, setPasswordVisible] = useState(false);

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


    const dragIn = () =>{
        signInFunc(email, password);
        toggleLogIn();
    }

    const googleDragIn = () =>{
        signInWithPopup(auth, gAuth)
        .then(()=>{
            toggleLogIn();
            
        }).catch((error)=>{
            console.log(`Error: ${error}`)
        })
    }

    return(
        <>
        <div className="signin-container">
            <form action={dragIn}>
        {!emailFlip && <div>               
            <MdAlternateEmail className="relative text-2xl top-10 left-1 text-yellow-800" />
            </div>
            }
            {emailFlip && <div>               
            <MdAlternateEmail className="relative text-2xl top-10 left-1 text-yellow-600" />
            </div>
            }              
            <div className="">
                    <input type="email" placeholder="Email" className="input-box" onChange={(e)=>setEmail(e.target.value)} onBlur={emailOff} onFocus={emailOn} />
                </div>
                {!passwordFlip && <div>
                    <FaKey className="relative text-xl top-9 left-1 text-yellow-800" />
                </div>
                }
                {passwordFlip && <div>
                    <FaKey className="relative text-xl top-9 left-1 text-yellow-600" />
                </div>
                }
                <div className="">
                    <input type={passwordVisible?"text":"password"} placeholder="Password" className="input-box" onChange={(e)=>setPassword(e.target.value)} onBlur={passwordOff} onFocus={passwordOn} />
                </div>
                {!passwordVisible && <div>
                    {!passwordFlip && <div>
                    <FaEye className="relative text-2xl bottom-11  left-65 text-yellow-800" onClick={togglePassword}  />
                    </div>}
                    {passwordFlip && <div>
                    <FaEye className="relative text-2xl bottom-11  left-65 text-yellow-600" onClick={togglePassword} />
                    </div>}
                </div>}
                {passwordVisible && <div>
                    {!passwordFlip && <div>
                    <FaEyeLowVision className="relative text-2xl bottom-11  left-65 text-yellow-800" onClick={togglePassword} />
                    </div>}
                    {passwordFlip && <div>
                    <FaEyeLowVision className="relative text-2xl bottom-11  left-65 text-yellow-600" onClick={togglePassword} />
                    </div>}
                </div>}
                <div className="mb-3">
                    <input type="submit" value="Submit" className="form-submit" />
                    
                </div>
            </form>
            <div>
                <button className="form-submit" onClick={googleDragIn} >Sign In With Google</button>
            </div>
        </div>
        </>
    )
}

export default SignIn;