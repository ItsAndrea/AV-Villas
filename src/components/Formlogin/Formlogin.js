import React from "react";

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
                            <form className="user">
                                <div className="form-group">
                                <label for="documento" className="form-label">Tipo de documento</label>
                                <input className="form-control" list="datalistOptions" id="documento" type="text" placeholder="Selecciona tipo de documento..." data-sb-validations="required" />
                                <datalist id="datalistOptions">  
                                    <option value="Cédula de ciudadanía">Cédula de ciudadanía</option>
                                    <option value="Pasaporte">Pasaporte</option>
                                    <option value="Cédula de extranjería">Cédula de extranjería</option>
                                    <div className="invalid-feedback" data-sb-feedback="name:required">Tipo de documento requerido.</div>
                                </datalist>
                                <label for="inputCedula" className="form-label">Numero de documento</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="inputCedula"
                                    aria-describedby="cedulaHelp"
                                    placeholder="Ingresa tu número de identificación..."
                                />
                                <div className="form-group">
                                <label for="inputPassword" className="form-label">Contraseña</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="inputPassword"
                                    placeholder="Ingresa tu contraseña..."
                                />
                                </div>
                                </div>
                                <a
                                href="./dashboard.html"
                                id="loginBtn"
                                type="submit"
                                className="btn btn-primary btn-user btn-block"
                                style={{backgroundColor:"#0050A1"}}
                                >
                                Login
                                </a>
                            </form>
                            <div className="text-center">
                                <a className="small" href="./register.html"
                                >Crea una cuenta</a
                                >
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