import React from "react";
import { Link } from "react-router-dom";

class Formlogin extends React.Component {

    render() {
        return (
            <section className="page-section bg-white" id="login">
            <div className="container">
                {/*<!-- Outer Row -->*/}
                <div className="row justify-content-center">
                <div className="col-xl-10 col-lg-12 col-md-9">
                    <div className="card o-hidden border-0 shadow-lg my-5">
                    <div className="card-body p-0">
                        {/*<!-- Nested Row within Card Body -->*/}
                        <div className="row">
                        <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                        <div className="col-lg-6">
                            <div className="p-5">
                            <div className="text-center">
                                <h1 className="h4 text-gray-900 mb-4">Ingresa a tu cuenta</h1>
                            </div>
                            <br/>
                            <form className="user">
                                <div className="form-group">
                                <label htmlFor="documento" className="form-label">Tipo de documento</label>
                                <input className="form-control" list="datalistOptions" id="documento" type="text" placeholder="Selecciona tipo de documento..." data-sb-validations="required" autoFocus/>
                                <datalist id="datalistOptions">  
                                    <option value="Cédula de ciudadanía">Cédula de ciudadanía</option>
                                    <option value="Pasaporte">Pasaporte</option>
                                    <option value="Cédula de extranjería">Cédula de extranjería</option>
                                </datalist>
                                <label htmlFor="inputCedula" className="form-label">Numero de documento</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="inputCedula"
                                    aria-describedby="cedulaHelp"
                                    placeholder="Ingresa tu número de identificación..."
                                />
                                <div className="form-group">
                                <label htmlFor="inputPassword" className="form-label">Contraseña</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="inputPassword"
                                    placeholder="Ingresa tu contraseña..."
                                />
                                </div>
                                </div>
                                <br/>
                                <a
                                href="./dashboard"
                                id="loginBtn"
                                type="submit"
                                className="btn btn-primary btn-user btn-block"
                                style={{backgroundColor:"#0050A1"}}
                                >
                                Login
                                </a>
                            </form>
                            <div className="text-center">
                                <Link className="small" to="/registro"
                                >Crea una cuenta</Link>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
        )
    }
}

export default Formlogin