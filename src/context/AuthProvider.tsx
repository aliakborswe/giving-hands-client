import { AuthInfo } from "@/utils/authInfo";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  User,
} from "firebase/auth";
import { ReactNode, useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import auth from "@/firebase/firebase.init.ts";

type Props = {
  children: ReactNode;
};

const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User>({} as User);
  const [loading, setLoading] = useState(true);

  // create user
  const createUser = (email: string, password: string) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // observer auth state change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user as User);
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
  };
  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
