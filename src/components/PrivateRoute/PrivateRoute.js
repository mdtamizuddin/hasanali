import { getAuth } from "firebase/auth";
import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../ContextApi/AuthProvider";
import app from "../Firebase/firebase.init";
import { useAuthState } from 'react-firebase-hooks/auth'
const PrivateRoute = ({ children }) => {
  const auth = getAuth(app)
  const [user, loading] = useAuthState(auth)
  if (user && user.uid) {
    return children;
  }
  else if (loading) {
    return "Loading"
  }
  else {
    return <Navigate to="/login"> </Navigate>;
  }
};

export default PrivateRoute;
