
'use client';

import { GoldContext } from "@/Context";
import { useContext, useEffect } from "react";
GoldContext

const LiveUpdate = ({  }) =>{

   const {liveupdate, saveUpdate} = useContext(GoldContext);
    const cdate = Date.now();

    return(
        <>
        <div className="bg-black text-yellow-500 w-[30vw] h-[25vh] rounded-xl px-10 py-5">
            <h3 className="text-xl">Metal</h3>
            <h4>Currency</h4>
            <h1 className="text-4xl mt-3">Number</h1>
        </div>
        </>
    )
}

export default LiveUpdate;