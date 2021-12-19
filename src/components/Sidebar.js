import { NavLink } from 'react-router-dom'
import * as icons from "react-icons/fa";

const Sidebar = () => {
    return (

        <div className="Sidebar">
            <div className="text-center mt-5">
                <img src="/images/logo.png" width='100' alt="No disponible" />
                <p className="fs-5 fw-bolder text-light fst-italic">Banco AV Villas</p>
            </div>

            <div>
                <ul>
                    <li>
                        <NavLink to={"/"} exact="true" className="text-light rounded py-2 w-100 d-inline-block px-3 " ><icons.FaCreditCard className="me-2 text-dark" size={22} />  Cuentas</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/Transacciones"} exact="true" className="text-light rounded py-2 w-100 d-inline-block px-3 " ><icons.FaExchangeAlt className="me-2 text-dark" size={22} />  Transacciones</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/Solicitudes"} exact="true" className="text-light rounded py-2 w-100 d-inline-block px-3 " ><icons.FaClipboardList className="me-2 text-dark" size={22} />  Solicitudes</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/CerrarSesion"} exact="true" className="text-light rounded py-2 w-100 d-inline-block px-3 " ><icons.FaSignOutAlt className="me-2 text-dark" size={22} />  Cerrar Sesion</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;