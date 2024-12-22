import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AllRoutes from './routes/routes'
import { ToastContainer } from "react-toastify";
import AuthProvider from './context/AuthProvider';

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <AllRoutes />
      <ToastContainer position='top-right' />
    </AuthProvider>
  </StrictMode>
);
