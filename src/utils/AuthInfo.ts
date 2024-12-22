import { User } from "firebase/auth";


export type AuthInfo = {
  user?: User;
  setUser?: React.Dispatch<React.SetStateAction<User>>;
};
