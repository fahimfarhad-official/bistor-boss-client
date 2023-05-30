import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Create a user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // SignIn user
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(email, password);
  };

    // Sign Out user
    const SignOut = () =>{
        setLoading(true);
        return signOut(auth)
    }   

  // user state change
  useEffect(() => {
    const usSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("currentUser is:- ", currentUser);
      setLoading(false);
    });
    return usSubscribe();
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    signOut
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
