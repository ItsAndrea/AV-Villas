import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from '../src/components/Nabvar'
import Sidebar from '../src/components/Sidebar'


import Cuentas from "../src/pages/Cuentas"
import Transacciones from "../src/pages/Transacciones"
import Solicitudes from "../src/pages/Solicitudes"
import CerrarSesion from "../src/pages/CerrarSesion"
import './App.scss';
import 'bootstrap/scss/bootstrap.scss'


function App () {
  return (

    <Router>
      <div className="flex">
        <Sidebar></Sidebar>
        <div className="content w-100 ">
          <Routes>
            <Route path="/" element={<Cuentas />}></Route>
            <Route path="/Transacciones" element={<Transacciones />}></Route>
            <Route path="/Solicitudes" element={<Solicitudes />}></Route>
            <Route path="/CerrarSesion" element={<CerrarSesion />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
