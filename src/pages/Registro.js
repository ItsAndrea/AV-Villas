import React from "react";
import Navbar from "../components/Navbar";
import Formreg from "../components/Formreg"
import Footer from "../components/Footer"
import { useNavigate } from "react-router-dom";

const Registro = (props) => {
    let nav = useNavigate()
    const obtenerRegis = (datos) =>{
        fetch(`http://localhost:8000/api/crear_usuairo`, {
          method: "POST",
          body: JSON.stringify(datos),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .catch((error) => console.error("Error:", error))
          .then((response) => {
            nav("/login");
          });
    }
        return (
            <div>
                <Navbar />
                <Formreg registroUsuario={obtenerRegis}/>
                <Footer />
            </div>
        );
};

export default Registro