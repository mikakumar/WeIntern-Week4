"use client";

import { useRouter } from "next/navigation";

const GlobalErr = () =>{

    const router = useRouter();

    const directHome = () =>{
        router.push("/")
    }
    return(
        <>
        <div className="text-white flex flex-col text-center items-center mt-40 mk-font  ">
        <h1 className="text-8xl">404 not found</h1>
        <h2 className="text-4xl">Please try again!</h2>
        <button className="bg-black h-[10vh] w-[20vw] px-3 py-2 my-5 rounded-md text-center cursor-pointer text-yellow-600 text-4xl" onClick={directHome}>Go Home</button>
        </div>
        </>
    )
}

export default GlobalErr;