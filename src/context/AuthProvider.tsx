import { AuthInfo } from "@/utils/authInfo";
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

type Props = {
  children: ReactNode;
};

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User>({} as User);
  const [loading, setLoading] = useState(true);

  console.log("user from state", user);

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
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };



  // observer auth state change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user as User);
      console.log("user from observer", user);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  // provider value
  const authValue: AuthInfo = {
    user,
    setUser,
    createUser,
    loading,
    setLoading,
    login,
    loginWithGoogle,
    logout,
    updateUserProfile,
  };
  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
