import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase.config';


const auth = getAuth(app)
const provider = new GoogleAuthProvider()


export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
  const [user,setUser] = useState(null)
  const [loading ,setLoading] = useState(true)

  const createUser = (email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
  }

  const signIn = (email,password)=>{
    return signInWithEmailAndPassword(auth ,email ,password)
  }
  const signInGoogle= ()=>{
    return signInWithPopup(auth,provider)
  }
  
  
  const logOut = ()=>{
    return signOut(auth)
  }
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth ,(currentUser)=>{
      console.log("user is login now",currentUser)
      setUser(currentUser)
      setLoading(false)
    })
    return ()=>{
      unsubscribe()
    }
  },[])


  const authInfo ={
    user ,
    loading,
    signInGoogle,
    createUser,
    signIn,
    logOut
  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;