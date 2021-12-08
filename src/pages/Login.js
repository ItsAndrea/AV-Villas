import React from "react";
import Navbar from "../components/Navbar";
import Formlogin from "../components/Formlogin"
import Footer from "../components/Footer"

class Login extends React.Component {

    render() {
        return (
            <div>
                <Navbar />
                <Formlogin />
                <Footer />
            </div>
        )
    }
}

export default Login