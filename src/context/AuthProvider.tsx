
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  User,
} from "firebase/auth";
import { ReactNode, useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import auth from "@/firebase/firebase.init.ts";
import axios from "axios";

type Props = {
  children: ReactNode;
};

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User>({} as User);
  const [loading, setLoading] = useState(true);

  // create user
  const createUser = (email: string, password: string) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login with email and password
  const login = (email: string, password: string) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // login with google popup
  const loginWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // logout
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  //update user information
  const updateUserProfile = (updateInfo: object) => {
    return updateProfile(auth.currentUser as User, updateInfo);
  };

  // observer auth state change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user as User);
      // console.log('state captured', user?.email);
      if(user?.email){
        axios
          .post(
            // "https://giving-hands-server.vercel.app/api/v1/login",
            "http://localhost:8000/api/v1/login",
            { email: user.email },
            { withCredentials: true }
          )
          .then(() => {
            // console.log("login token", res.data);
            setLoading(false);
          });
      }else{
        axios
          .post(
            "https://giving-hands-server.vercel.app/api/v1/logout",
            "http://localhost:8000/api/v1/logout"
          )
          .then(() => {
            // console.log("logout", res.data);
            setLoading(false);
          });
      }
    });
    return () => {
      unsubscribe();
    };
  }, [ ]);

  // provider value
  const authValue = {
    user,
    setUser,
    createUser,
    loading,
    setLoading,
    login,
    loginWithGoogle,
    logOut,
    updateUserProfile,
  };
  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
