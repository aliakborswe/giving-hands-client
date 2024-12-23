import ErrorPage from "@/error-page";
import MainLayout from "@/layouts/MainLayout";
import About from "@/pages/about/About";
import AddVolunteerNeedPost from "@/pages/addVolunteerNeedPost/AddVolunteerNeedPost";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
import Home from "@/pages/home/Home";
import MyPosts from "@/pages/myPosts/MyPosts";
import Posts from "@/pages/AllpostPage/Posts";
import { BrowserRouter, Route, Routes } from "react-router";
import PrivetRoute from "./PrivetRoute";
import useAuth from "@/hooks/useAuth";



const AllRoutes = () => {
  const { user } = useAuth();
  const isAuthenticated = Boolean(user?.email);
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            {/* Public routes */}
            <Route index element={<Home />} />
            <Route path='posts' element={<Posts />} />
            <Route path='about' element={<About />} />
            <Route path='register' element={<Register />} />
            <Route path='login' element={<Login />} />
            {/* Privet routes */}
            <Route
              element={
                <PrivetRoute
                  isAuthenticated={isAuthenticated}
                  redirectPath='/login'
                />
              }
            >
              <Route
                path='addVolunteerNeedPost'
                element={<AddVolunteerNeedPost />}
              />
              <Route path='myPosts' element={<MyPosts />} />
            </Route>
          </Route>
          {/* error route without header and footer */}
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    );
}
export default AllRoutes;