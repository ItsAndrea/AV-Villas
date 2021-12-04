import React from "react";
import Navbar from "../components/Navbar";
import Formlogin from "../components/Formlogin"

class Login extends React.Component {

    render() {
        return (
            <div>
                <Navbar />
                <Formlogin />
            </div>
        )
    }
}

export default Login