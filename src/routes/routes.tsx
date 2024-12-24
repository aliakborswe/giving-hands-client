import ErrorPage from "@/error-page";
import MainLayout from "@/layouts/MainLayout";
import About from "@/pages/about/About";
import AddVolunteerNeedPost from "@/pages/volunteerNeedPost/AddVolunteerNeedPost";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
import Home from "@/pages/home/Home";
import MyPosts from "@/pages/manageMyPosts/MyPosts";
import Posts from "@/pages/allpostPage/Posts";
import { BrowserRouter, Route, Routes } from "react-router";
import PrivetRoute from "./PrivetRoute";
import useAuth from "@/hooks/useAuth";
import PostDetailsPage from "@/pages/postDetailsPage/postDetailsPage";
import ApplicationPage from "@/pages/applicationPage/applicationPage";
import UpdateVolunteerNeedPost from "@/pages/volunteerNeedPost/UpdateVolunteerNeedPost";



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
              <Route
                path='updateVolunteerNeedPost/:id'
                element={<UpdateVolunteerNeedPost />}
              />
              <Route path='myPosts' element={<MyPosts />} />
              <Route path='posts/:id' element={<PostDetailsPage />} />
              <Route path="application/:id" element={<ApplicationPage />} />
            </Route>
          </Route>
          {/* error route without header and footer */}
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    );
}
export default AllRoutes;