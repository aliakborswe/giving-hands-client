import { AuthInfo } from "@/utils/authInfo";
import { createContext } from "react";

const AuthContext = createContext<AuthInfo | null>(null);

export default AuthContext;