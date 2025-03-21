"use client";

import { useContext, useState } from "react";
import { useRouter } from "next/navigation";

import { auth, gAuth } from "@/api/firebase-config";
import { signInWithPopup } from "firebase/auth";
import { signInFunc} from "./auth";
import { SignInBack } from "@/api/back-fetch";


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

    const router = useRouter();

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
        router.push('/dashboard')
        SignInBack(email, password);
    }

    const googleDragIn = () =>{
        signInWithPopup(auth, gAuth)
        .then(()=>{
            toggleLogIn();
            router.push('/dashboard');
            SignInBack(email, password);
            
        }).catch((error)=>{
            console.log(`Error: ${error}`)
        })
    }

    return(
        <>
        <div className="signin-container">
            <form action={dragIn}>
        {!emailFlip && <div className="relative top-10 left-1">               
            <MdAlternateEmail className="text-2xl text-yellow-800" />
            </div>
            }
            {emailFlip && <div className="relative top-10 left-1">               
            <MdAlternateEmail className="text-2xl text-yellow-600" />
            </div>
            }              
            <div className="">
                    <input type="email" placeholder="Email" className="input-box" onChange={(e)=>setEmail(e.target.value)} onBlur={emailOff} onFocus={emailOn} />
                </div>
                {!passwordFlip && <div className="relative top-9 left-1">
                    <FaKey className="text-xl text-yellow-800" />
                </div>
                }
                {passwordFlip && <div className="relative top-9 left-1">
                    <FaKey className="text-xl text-yellow-600" />
                </div>
                }
                <div className="">
                    <input type={passwordVisible?"text":"password"} placeholder="Password" className="input-box" onChange={(e)=>setPassword(e.target.value)} onBlur={passwordOff} onFocus={passwordOn} />
                </div>
                {!passwordVisible && <div>
                    {!passwordFlip && <div className="relative bottom-11 left-65">
                    <FaEye className=" text-2xl text-yellow-800" onClick={togglePassword}  />
                    </div>}
                    {passwordFlip && <div className="relative bottom-11 left-65">
                    <FaEye className="relative text-2xl text-yellow-600" onClick={togglePassword} />
                    </div>}
                </div>}
                {passwordVisible && <div>
                    {!passwordFlip && <div className="relative bottom-11 left-65">
                    <FaEyeLowVision className="text-2xl text-yellow-800" onClick={togglePassword} />
                    </div>}
                    {passwordFlip && <div className="relative bottom-11 left-65">
                    <FaEyeLowVision className="text-2xl text-yellow-600" onClick={togglePassword} />
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