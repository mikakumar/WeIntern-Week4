'use client';

import {auth, gAuth, db} from '@/api/firebase-config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';

import {doc, getDoc, setDoc} from 'firebase/firestore';


export const signInFunc = async(email, password) => {
    try{ 
        await signInWithEmailAndPassword(email, password);
    } catch(error){
        console.log(`Error: ${error}`);
    }
};


export const registerFunc = async(name, email, password) =>{
    try{
        await createUserWithEmailAndPassword(auth, email, password);
        const user = auth.currentUser;
            await setDoc(doc(db, "users", user.uid), {
                name: name,
                email: email,
                password: password
            });
        alert('User registered successfully!')
    } catch(error){
        console.log(`Error: ${error}`);
    }
};

export const signOutFunc = async() =>{
    auth.signOut();
}