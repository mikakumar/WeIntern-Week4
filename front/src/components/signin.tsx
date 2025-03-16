"use client";

import { useContext, useState } from "react";
import { signInWithPopup } from "firebase/auth";
import { signInFunc} from "./auth";
import { GoldContext } from "../Context";
import { auth, gAuth } from "@/api/firebase-config";

const SignIn = () =>{

    const {toggleLogIn} = useContext(GoldContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
            <div className="mt-[5vh]">
                    <input type="email" placeholder="Email" className="input-box" onChange={(e)=>setEmail(e.target.value)} />
                </div>

                <div className="mt-[4vh]">
                    <input type="password" placeholder="Password" className="input-box" onChange={(e)=>setPassword(e.target.value)} />
                </div>
                <div className="mt-6 mb-3">
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