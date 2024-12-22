import { BrowserRouter, Route, Routes } from "react-router";
import MainLayout from "@/layouts/MainLayout";
import ErrorPage from "@/error-page";
import Register from "@/pages/auth/Register";
import Login from "@/pages/auth/Login";
import Home from "@/pages/home/Home";
import Posts from "@/pages/posts/Posts";
import About from "@/pages/about/About";
import AddVolunteerNeedPost from "@/pages/addVolunteerNeedPost/AddVolunteerNeedPost";
import MyPosts from "@/pages/myPosts/MyPosts";

const AllRoutes = () => {
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
            <Route>
              <Route path='addVolunteerNeedPost' element={<AddVolunteerNeedPost/>} />
              <Route path='myPosts' element={<MyPosts/>} />
            </Route>
          </Route>
          {/* error route without header and footer */}
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    );
}
export default AllRoutes;