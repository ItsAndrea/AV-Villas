import React from "react";
import Navbar from "../components/Navbar";
import Formlogin from "../components/Formlogin"
import Footer from "../components/Footer"
import { useNavigate } from "react-router-dom";

const Login = ({obtener}) => {

    let nav = useNavigate()

    const datoslogin = (datos) =>{
        obtener(datos, nav)
    }
        return (
            <div>
                <Navbar />
                <Formlogin datosUser = {datoslogin}/>
                <Footer />
            </div>
        )
    }

export default Login