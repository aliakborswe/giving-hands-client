import { BrowserRouter, Route, Routes } from "react-router";
import MainLayout from "@/layouts/MainLayout";
import ErrorPage from "@/error-page";

const AllRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout/>}>
                {/* Public routes */}
                    <Route index element={<h1>Home</h1>}/>
                    <Route path="about" element={<h1>About</h1>}/>
                    <Route path="contact" element={<h1>Contact</h1>}/>
                {/* Privet routes */}
                </Route>
                {/* error route without header and footer */}
                <Route path="*" element={<ErrorPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default AllRoutes;