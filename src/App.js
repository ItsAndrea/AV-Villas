import React, { useState, useEffect } from "react";
import { BrowserRouter,  Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import Registro from "./pages/Registro"

const App = () => {
  const iniciarSesion = (datos, nav) => {
    fetch("http://localhost:8000/api/login", {
      method: "POST",
      body: JSON.stringify(datos),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((response) => {
        window.location.href = "/dashboard"
      });
  }
  
    return (
      <BrowserRouter>
        <Routes>
        <Route path={'/'} element={<Home />} />
            <Route path={'/dashboard'} element={<Dashboard />} />
            <Route path={'/login'} element={<Login />} />
            <Route path={'/registro'} element={<Registro />} />
        </Routes>
      </BrowserRouter>
    );
  }


export default App;