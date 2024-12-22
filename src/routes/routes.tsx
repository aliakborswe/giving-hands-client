import { BrowserRouter, Route, Routes } from "react-router";
import MainLayout from "@/layouts/MainLayout";
import ErrorPage from "@/error-page";
import Register from "@/pages/auth/Register";
import Login from "@/pages/auth/Login";

const AllRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout/>}>
                {/* Public routes */}
                    <Route index element={<h1>Home</h1>}/>
                    <Route path="posts" element={<h1>Posts</h1>}/>
                    <Route path="profile" element={<h1>Profile</h1>}/>
                    <Route path="about" element={<h1>About</h1>}/>
                    <Route path="register" element={<Register/>}/>
                    <Route path="login" element={<Login/>}/>
                {/* Privet routes */}
                </Route>
                {/* error route without header and footer */}
                <Route path="*" element={<ErrorPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default AllRoutes;