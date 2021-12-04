import React from "react";
//import './App.css';

function public_url_for(asset_path){
  return process.env.PUBLIC_URL + asset_path
}

function App() {
  return (
    <div id="root">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
        <div className="container">
          <a className="navbar-brand" href="#page-top">Banco AV Villas</a>
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
                <a
                  className="nav-link"
                  href="./pages/register.html"
                >Registrarse</a
                >
              </li>
              <li className="nav-item">
                <a
                  className="btn btn-primary btn-sm text-uppercase"
                  href="./pages/login.html"
                >Login</a
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
    
      <header className="masthead">
        <div className="container">
          <div className="masthead-subheading">Administra tus ahorros</div>
          <div className="masthead-heading text-uppercase">creando tu cuenta</div>
          <a className="btn btn-primary btn-xl text-uppercase" href="./pages/register.html"
          >Empezar</a
          >
        </div>
      </header>

      
      < footer className="footer py-4" >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 text-lg-start">
              Copyright &copy; Todos los derechos reservados 2021
            </div>
          </div>
        </div>
      </footer >

    
      < script src = "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" ></script >
      
      < script src = "js/scripts.js" ></script >
      <script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>
    </div >
  );
}

export default App;