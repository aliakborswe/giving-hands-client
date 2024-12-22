import { AuthInfo } from "@/utils/authInfo";
import { getAuth, User } from "firebase/auth";
import { ReactNode, useState } from "react";
import AuthContext from "./AuthContext";
import { app } from "@/firebase/firebase.config";



type Props = {
  children: ReactNode;
};

const auth = getAuth(app)

const AuthProvider = ({children}: Props) => {
    const [user, setUser] = useState<User>({} as User);



    // provider value
    const authValue: AuthInfo = {
        user,
        setUser
    }
    return (
        <AuthContext.Provider value={authValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;