/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import useAuth from "./useAuth";


const axiosInstance = axios.create({
  baseURL: "https://giving-hands-server.vercel.app/api/v1",
  withCredentials: true,
});
const useAxiosSecure = () => {
    const { logOut } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
      axiosInstance.interceptors.response.use(
        (response) => {
          return response;
        },
        (error) => {
          //   console.log("api response error status", error.status);
          if (error.status === 401 || error.status === 403) {
            logOut().then(() => {
              navigate("/login");
            });
          }
          return Promise.reject(error);
        }
      );
    }, []);
    return axiosInstance;
};

export default useAxiosSecure;