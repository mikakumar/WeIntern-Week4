'use client';

import { useState } from "react";
import { IconContext } from "react-icons";

import { GiGoldScarab } from "react-icons/gi";

const Navbar = () =>{

    const [activeLink, setActiveLink] = useState('');

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
                    <li>Sign In</li>
                    <li>Sign Up</li>
                </ul>
            </div>
        </div>
        </>
    )
}

export default Navbar;