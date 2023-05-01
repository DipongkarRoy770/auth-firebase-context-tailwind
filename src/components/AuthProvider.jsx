import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword,GithubAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase.config';


const auth = getAuth(app)
const provider = new GoogleAuthProvider()
const githubProvider =new GithubAuthProvider()

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
  const githubSignIn = ()=>{
    return signInWithPopup(auth ,githubProvider)
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
    githubSignIn,
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