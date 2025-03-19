"use client";

import {createContext, useState, useEffect} from 'react';
import { ConvertSubcurrency } from './components/subcurrency';


const GoldContext = createContext();

function ContextProvider({children}){
    const [clientSecret, setClientSecret] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const [liveupdate, setLiveUpdate] = useState([]);
    

    useEffect(()=>{
        
        const tlogin = localStorage.getItem('loggedIn');

        if(!tlogin){
            setLoggedIn(false);
            localStorage.setItem(false);
        }

        if(tlogin == true){
            setLoggedIn(true);
            localStorage.setItem(true);
        }

        if(tlogin == false){
            setLoggedIn(false);
            localStorage.setItem(false);
        }

        
        fetch("/api/checkout", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({amount: ConvertSubcurrency(5.99)}),
         })
         .then((res)=>res.json())
         .then((data)=>setClientSecret(data.clientSecret))
        
    }, []);

    const toggleLogIn = () =>{
        setLoggedIn(true);
        localStorage.setItem('loggedIn', true);
    }

    const toggleLogOut = () =>{
        setLoggedIn(false);
        localStorage.setItem('loggedIn', false);
    }

    const saveUpdate = (nugget) =>{
        setLiveUpdate(nugget);
    }

    return(
        <GoldContext.Provider value={{loggedIn, toggleLogIn, toggleLogOut, clientSecret, liveupdate, saveUpdate}}>
            {children}
        </GoldContext.Provider>
    )
}

export {GoldContext, ContextProvider};