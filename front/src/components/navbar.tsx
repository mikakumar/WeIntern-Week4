'use client';

import { useContext, useState } from "react";
import { IconContext } from "react-icons";
import { GoldContext } from "../Context";


import Link from "next/link";

import { GiGoldScarab } from "react-icons/gi";
import { signOutFunc } from "./auth";

const Navbar = () =>{

    const {toggleLogOut} = useContext(GoldContext);
    const [activeLink, setActiveLink] = useState('');

    const loggedIn = localStorage.getItem('loggedIn');

    const kickOut = () =>{
        signOutFunc();
        toggleLogOut();
    }

    if(loggedIn == "true"){
        return(
            <>
            <div className="nav-container">
                <div className="nav-img">
                    <IconContext.Provider value={{className: "nav-img"}}>
                        <>
                        < GiGoldScarab />
                        </>
                    </IconContext.Provider>
                </div>
                <div className="nav-menu">
                    <ul>
                        <li>Home</li>
                        <li>Configure</li>
                        <li>Catalog</li>
                        <li>Wish List</li>
                    </ul>
                </div>
                <div className="user-menu">
                    <ul>
                        <Link href='' onClick={kickOut}>
                        <li>Sign Out</li>
                        </Link>
                    </ul>
                </div>
            </div>
            </>
        )
    }
    if(loggedIn == "false"){
    return(
        <>
        <div className="nav-container">
            <div className="nav-img">
                <IconContext.Provider value={{className: "nav-img"}}>
                    <>
                    < GiGoldScarab />
                    </>
                </IconContext.Provider>
            </div>
            <div className="user-menu">
                <ul>
                    <Link href="/signin">
                    <li>Sign In</li>
                    </Link>
                    <Link href="/signup">
                    <li>Sign Up</li>
                    </Link>
                </ul>
            </div>
        </div>
        </>
    )
}
}

export default Navbar;