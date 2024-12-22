import { BrowserRouter, Route, Routes } from "react-router";
import MainLayout from "@/layouts/MainLayout";
import ErrorPage from "@/error-page";
import Register from "@/pages/auth/Register";
import Login from "@/pages/auth/Login";
import Home from "@/pages/home/Home";

const AllRoutes = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            {/* Public routes */}
            <Route index element={<Home />} />
            <Route path='posts' element={<h1>Posts</h1>} />
            <Route path='profile' element={<h1>Profile</h1>} />
            <Route path='about' element={<h1>about</h1>} />
            <Route path='register' element={<Register />} />
            <Route path='login' element={<Login />} />
            {/* Privet routes */}
          </Route>
          {/* error route without header and footer */}
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    );
}
export default AllRoutes;