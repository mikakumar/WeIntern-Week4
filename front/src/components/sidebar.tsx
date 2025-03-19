
'use client';

import { useContext } from "react";
import { useRouter } from "next/navigation";
import { signOutFunc } from "./auth";

import { GoldContext } from "../Context";


const Sidebar = () =>{

    const {toggleLogOut} = useContext(GoldContext);
    const router = useRouter();

    const kickOut = () =>{
        signOutFunc();
        toggleLogOut();
        router.push('/signin')
    }

    return(
        <>
        <div className="mt-5 bg-black">
            <h2>Welcome</h2>
        </div>
        <div>
            <button className="bg-yellow-900 px-3 py-2 my-3 rounded-md cursor-pointer" onClick={kickOut}>Sign Out!</button>
        </div>
        </>
    )
}

export default Sidebar;