'use client';

import { useContext, useState } from "react";
import { IconContext } from "react-icons";
import { GoldContext } from "../Context";


import Link from "next/link";

import { signOutFunc } from "./auth";
import { LogoutBack } from "@/api/back-fetch";

import { GiGoldScarab } from "react-icons/gi";

const Navbar = () =>{

    const {toggleLogOut} = useContext(GoldContext);

    const loggedIn = window.localStorage.getItem('loggedIn');

    const kickOut = () =>{
        signOutFunc();
        toggleLogOut();
        LogoutBack();
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
                        <Link href='/signin' onClick={kickOut}>
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