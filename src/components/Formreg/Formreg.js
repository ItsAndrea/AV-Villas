import React from "react";

class Formreg extends React.Component {

    render() {
        return (
        <section className="page-section bg-white" id="login">
        <div className="container">
            <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
                {/*<!-- Nested Row within Card Body -->*/}
                <div className="row">
                <div className="col-lg-5 d-none d-lg-block bg-register-image"></div>
                <div className="col-lg-7">
                    <div className="p-5">
                    <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4"><b>Registrate</b></h1>
                    </div>
                    <form className="user">
                        <div className="form-group row">
                        <div className="col-sm-6 mb-3 mb-sm-0">
                            <label htmlFor="Nombrereg" className="form-label">Nombre</label>
                            <input
                            type="text"
                            className="form-control"
                            id="Nombrereg"
                            placeholder="Ingresa tu nombre ..."
                            autoFocus
                            />
                        </div>
                        <div className="col-sm-6">
                        <label htmlFor="tipodocumento" className="form-label">Tipo de documento</label>
                            <input
                            type="text"
                            className="form-control"
                            id="tipodocumento"
                            placeholder="Tipo de documento ..."
                            list="datalistOptions"
                            />
                            <datalist id="datalistOptions">  
                                    <option value="Cédula de ciudadanía">Cédula de ciudadanía</option>
                                    <option value="Pasaporte">Pasaporte</option>
                                    <option value="Cédula de extranjería">Cédula de extranjería</option>
                                    <div className="invalid-feedback" data-sb-feedback="name:required">Tipo de documento requerido.</div>
                            </datalist>
                        </div>
                        </div>
                        <div className="form-group row">
                        <div className="col-sm-6 mb-3 mb-sm-0">
                        <label htmlFor="numerodocreg" className="form-label">Número de documento</label>
                            <input
                            type="text"
                            className="form-control"
                            id="numerodocreg"
                            placeholder="Ingresa tu número de documento …"
                            />
                        </div>
                        <div className="col-sm-6">
                        <label htmlFor="fnacimiento" className="form-label">Fecha de nacimiento</label>
                            <input
                            type="date"
                            className="form-control"
                            id="fnacimiento"
                            placeholder="Fecha de nacimiento ..."
                            />
                        </div>
                        </div>
                        <div className="form-group row">
                        <div className="col-sm-6 mb-3 mb-sm-0">
                        <label htmlFor="fexpedicion" className="form-label">Fecha de expedición</label>
                            <input
                            type="date"
                            className="form-control"
                            id="fexpedicion"
                            placeholder="Fecha de expedición ..."
                            />
                        </div>
                        <div className="col-sm-6">
                        <label htmlFor="emailreg" className="form-label">Email</label>
                            <input
                            type="email"
                            className="form-control"
                            id="emailreg"
                            placeholder="Ingresa tu email …"
                            />
                        </div>
                        </div>
                        <div className="form-group row">
                        <div className="col-sm-6 mb-3 mb-sm-0">
                        <label htmlFor="direccion" className="form-label">Dirección</label>
                            <input
                            type="text"
                            className="form-control"
                            id="direccion"
                            placeholder="Ingresa tu dirección ..."
                            />
                        </div>
                        <div className="col-sm-6">
                        <label htmlFor="passwordreg" className="form-label">Contraseña</label>
                            <input
                            type="password"
                            className="form-control"
                            id="passwordreg"
                            placeholder="Ingresa tu contraseña …"
                            />
                        </div>
                        </div>

                        <a
                        href="./login"
                        className="btn btn-primary btn-user btn-block"
                        style={{backgroundColor:"#0050A1"}}
                        >
                        Registrar
                        </a>
                    </form>
                    <div className="text-center">
                        <a className="small" href="login"
                        >Ya tienes una cuenta? Login!</a
                        >
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

export default Formreg