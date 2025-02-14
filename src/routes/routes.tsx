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
import UpdateVolunteerNeedPost from "@/pages/volunteerNeedPost/UpdateVolunteerNeedPost";
import AddApplication from "@/pages/volunteerApplicationPage/AddApplication";
import UpdateApplication from "@/pages/volunteerApplicationPage/UpdateApplication";
import BaseLayout from "@/layouts/BaseLayout";



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
              <Route path='application/:id' element={<AddApplication />} />
              <Route
                path='updateApplication/:id'
                element={<UpdateApplication />}
              />
            </Route>
          </Route>
          {/* Auth route without header and footer */}
          <Route path='/' element={<BaseLayout />}>
            <Route path='register' element={<Register />} />
            <Route path='login' element={<Login />} />
          </Route>
          {/* error route without header and footer */}
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    );
}
export default AllRoutes;