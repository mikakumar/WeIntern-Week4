'use client';

import {auth, gAuth, db} from '@/api/firebase-config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';

import {doc, getDoc, setDoc} from 'firebase/firestore';

export const authCheck = async() =>{
    auth.onAuthStateChanged(async(user)=>{
        const docRef = doc(db, 'users', user.uid);
        const docSnap= await getDoc(docRef);
        if(docSnap.exists()){

        }

        else {

        }

    });
}

export const signInFunc = async(email, password) => {
    try{ 
        await signInWithEmailAndPassword(email, password);
    } catch(error){
        console.log(`Error: ${error}`);
    }
};

export const googleSignInFunc = async() =>{
    try{
        await signInWithPopup(auth, gAuth);
    }catch(error){
        console.log(`Error: ${error}`);
    }
}

export const registerFunc = async(name, email, password) =>{
    try{
        await createUserWithEmailAndPassword(auth, email, password);
        const user = auth.currentUser;
        if(user){
            await setDoc(doc(db, 'users', user.uid), {
                name: name,
                email: email,
                password: password
            });
        }
        alert('User registered successfully!')
    } catch(error){
        console.log(`Error: ${error}`);
    }
};

export const signOutFunc = async() =>{
    auth.signOut();
}