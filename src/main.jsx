import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from "./home/home"
import UserInfoPage from "./pages/UserInfoPage";
import CadastroUser from "./pages/Cadastro";
import RentUser from "./pages/RentUser";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/Home",
    element: <Home />,
  },
  {
    path: "/UserInfo",
    element: <UserInfoPage />,
  },
  {
    path: "/Cadastro",
    element: <CadastroUser />,
  },
  {
    path: "/Aluguel",
    element: <RentUser />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
