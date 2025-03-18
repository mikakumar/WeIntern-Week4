"use client";

import {createContext, useState, useEffect} from 'react';


const GoldContext = createContext();

function ContextProvider({children}){
    const [loggedIn, setLoggedIn] = useState(false);
    const [clientSecret, setClientSecret] = useState('');
    

    useEffect(()=>{
        
        const tlogin = localStorage.getItem('loggedIn');

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
            body: JSON.stringify({amount: convertSubcurrency(5.99)}),
         })
         .then((res)=>res.json())
         .then((data)=>setClientsecret(data.clientSecret))
        
    }, []);

    const toggleLogIn = () =>{
        setLoggedIn(true);
        localStorage.setItem('loggedIn', true);
    }

    const toggleLogOut = () =>{
        setLoggedIn(false);
        localStorage.setItem('loggedIn', false);
    }

    return(
        <GoldContext.Provider value={{loggedIn, toggleLogIn, toggleLogOut, clientSecret}}>
            {children}
        </GoldContext.Provider>
    )
}

export {GoldContext, ContextProvider};