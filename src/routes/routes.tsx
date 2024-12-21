import { BrowserRouter, Route, Routes } from "react-router";
import MainLayout from "@/layouts/MainLayout";

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
            </Routes>
        </BrowserRouter>
    )
}
export default AllRoutes;