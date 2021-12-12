import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

class Home extends React.Component {

    render() {
        return (
            <div>
                <Navbar />
                <div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <h2>Bienvenido al Banco AvVillas</h2>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Home