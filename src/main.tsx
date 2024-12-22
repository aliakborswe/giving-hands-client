import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AllRoutes from './routes/routes'
import { ToastContainer } from "react-toastify";
import AuthProvider from './context/AuthProvider';
import ThemeProvider from './context/ThemeProvider';

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <AllRoutes />
        <ToastContainer position='bottom-center' />
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>
);
