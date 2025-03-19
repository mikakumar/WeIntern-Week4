"use client";

import {createContext, useState, useEffect} from 'react';


const GoldContext = createContext();

function ContextProvider({children}){
    const [loggedIn, setLoggedIn] = useState(false);
    
    

    useEffect(()=>{
        
        const tlogin = window.localStorage.getItem('loggedIn');

        if(tlogin == true){
            setLoggedIn(true);
            window.localStorage.setItem(true);
        }

        if(tlogin == false){
            setLoggedIn(false);
            window.localStorage.setItem(false);
        }
        
    }, []);

    const toggleLogIn = () =>{
        setLoggedIn(true);
        window.localStorage.setItem('loggedIn', true);
    }

    const toggleLogOut = () =>{
        setLoggedIn(false);
        window.localStorage.setItem('loggedIn', false);
    }

    return(
        <GoldContext.Provider value={{loggedIn, toggleLogIn, toggleLogOut}}>
            {children}
        </GoldContext.Provider>
    )
}

export {GoldContext, ContextProvider};