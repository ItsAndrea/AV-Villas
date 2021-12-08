import React from "react";
import Navbar from "../components/Navbar";
import Formreg from "../components/Formreg"
import Footer from "../components/Footer"

class Registro extends React.Component {

    render() {
        return (
            <div>
                <Navbar />
                <Formreg />
                <Footer />
            </div>
        )
    }
}

export default Registro