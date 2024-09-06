import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Header from "./components/Header.jsx";
import "./index.css";
import EditBarang from "./Items/EditBarang.jsx";
import ProdukBarang from "./Items/ProdukBarang.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import TambahBarang from "./Items/TambahBarang.jsx";
import Register from "./pages/Register.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/header",
        element: <Header />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/produkBarang",
        element: <ProdukBarang />,
      },
      {
        path: "/tambahBarang",
        element: <TambahBarang />,
      },
      {
        path: "/editBarang/:id",
        element: <EditBarang />,
      },
   
    
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
