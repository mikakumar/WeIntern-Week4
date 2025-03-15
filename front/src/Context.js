'use client';

import {createContext, useState, useEffect} from 'react';

const appContext = createContext();
const tlogin = localStorage.getItem('loggedIn');


function ContextProvider({children}){
    const [loggedIn, setLoggedIn] = useState();

    useEffect(()=>{
        if(loggedIn == undefined){
            setLoggedIn(false);
        }
        
        switch(tlogin){
            case true: {
                setLoggedIn(true);
            }
            case false: {
                setLoggedIn(false);
            }
            default: {
                setLoggedIn(false);
            }
        }
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
        <appContext.Provider value={{toggleLogIn, toggleLogOut}}>
            {children}
        </appContext.Provider>
    )
}

export {appContext, ContextProvider};