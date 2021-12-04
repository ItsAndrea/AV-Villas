import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import Registro from "./pages/Registro"

class App extends React.Component {
  
  render() {
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
}

export default App;