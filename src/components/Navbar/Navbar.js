import React from "react";

class Navbar extends React.Component {
    render() {
        return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav" style={{backgroundColor: '#E20007'}}>
            <div className="container">
            <a className="navbar-brand" href="../index.html" style={{color: "white"}}><b>BANCO AV VILLAS</b></a>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarResponsive"
                aria-controls="navbarResponsive"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                Menu
                <i className="fas fa-bars ms-1"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                <li className="nav-item">
                    <a className="nav-link" href="./register.html" style={{color:'white'}}>Registrarse</a>
                </li>
                <li className="nav-item">
                    <a
                    className="btn btn-primary btn-sm text-uppercase"
                    href="./login.html"
                    style={{backgroundColor:'#0050A1'}}
                    >Login</a
                    >
                </li>
                </ul>
            </div>
        </div>
      </nav>
      );

    }
}

export default Navbar