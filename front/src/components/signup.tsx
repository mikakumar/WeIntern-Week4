
import { useContext } from "react";

import { MdAlternateEmail } from "react-icons/md";
import { FaKey } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { FaEyeLowVision } from "react-icons/fa6";

import { FaGoogle } from "react-icons/fa";

import { GoldContext } from '../Context';

const SignUp = () => {

    return(
        <>
        <div className="signup-container">
            <form action="">
            <div className="mt-[3vh]">
                    <input type="name" placeholder="Full Name" className="input-box" />
                </div>
                <div className="mt-[4vh]">
                    <input type="email" placeholder="Email" className="input-box" />
                </div>
                <div className="mt-[4vh]">
                    <input type="password" placeholder="Password" className="input-box"/>
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