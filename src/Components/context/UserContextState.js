import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "@firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "./Util/firebaseConfig";
const UserContext = createContext({});

export const useUserContext = () => UserContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // useEffect for firebase onAuthStateChanged

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  const register = async (email, password) => {
    try {
      const userData = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      console.log(userData);
    } catch (error) {
      console.log(error);
    }
  };

  const login = async(email,password)=>{
    try {
      const userData = await signInWithEmailAndPassword(auth,email,password)
      console.log(userData.user)
    } catch (error) {
      console.log(error)
      
    }
  }

  const values = {
    user,
    register,
    login
  };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};
