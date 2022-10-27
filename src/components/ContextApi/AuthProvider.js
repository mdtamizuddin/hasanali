import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  updatePassword,
} from "firebase/auth";
import app from "../Firebase/firebase.init";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({loading : true});
  const { loading, setLoading } = useState(true);
  const [updateInfo, setUpdateInfo] = useState("");

  const gProvider = new GoogleAuthProvider();
  const gHubProvider = new GithubAuthProvider();

  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, GoogleAuthProvider);
  };

  const gitHubSign = () => {
    setLoading(true);
    return signInWithPopup(auth, GithubAuthProvider);
  };

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updadteProfile = (name, url) => {
    setLoading(true);
    return updadteProfile(auth.currentUser, {
      displayName: name,
      PhotoURL: url,
    });
  };

  const passwordReset = (email) => {
    return updatePassword(auth, email);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoading(true);
      setUser(currentUser);
    });
    return () => {
      unSubscribe();
    };
  }, [updateInfo]);

  const authInfo = {
    googleLogin,
    gitHubSign,
    signIn,
    updadteProfile,
    passwordReset,
    setUpdateInfo,
    createUser,
    user,
  };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
