import React from "react";
import { Link } from "react-router-dom";

const Formreg = ({registroUsuario}) => {
    const registrarUsuario = (event) => {
        event.preventDefault();

        const datosUsuario = {
            nombre:event.target.Nombrereg.value,
            tipoDoc:event.target.tipodocumento.value,
            numDoc:event.target.numerodocreg.value,
            fecNac:event.target.fnacimiento.value,
            fecExp:event.target.fexpedicion.value,
            correo:event.target.emailreg.value,
            direccion:event.target.direccion.value,
            ciudad:event.target.ciudadreg.value,
            password:event.target.passwordreg.value,
            confpassword:event.target.passwordregconf.value,
            rol: 1,
            estado:"activo"
        };

        if (!valpassword(datosUsuario.password, datosUsuario.confpassword)) {
            alert("Las contraseñas no coincide");
          } else {
            registroUsuario(datosUsuario);
          }

    };

    const valpassword = (password, confpassword) => {
        return password === confpassword;
      };
    

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
                    <br/>
                    <form className="user" onSubmit={registrarUsuario}>
                        <div className="form-group row">
                        <div className="col-sm-6 mb-3 mb-sm-0">
                            <label htmlFor="Nombrereg" className="form-label">Nombre</label>
                            <input
                            type="text"
                            className="form-control"
                            id="Nombrereg"
                            name="Nombrereg"
                            placeholder="Ingresa tu nombre ..."
                            autoFocus
                            required
                            />
                        </div>
                        <div className="col-sm-6">
                        <label htmlFor="tipodocumento" className="form-label">Tipo de documento</label>
                            <input
                            type="text"
                            className="form-control"
                            id="tipodocumento"
                            name="tipodocumento"
                            placeholder="Tipo de documento ..."
                            list="datalistOptions"
                            required
                            />
                            <datalist id="datalistOptions" name>  
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
                            name="numerodocreg"
                            placeholder="Ingresa tu número de documento …"
                            required
                            />
                        </div>
                        <div className="col-sm-6">
                        <label htmlFor="fnacimiento" className="form-label">Fecha de nacimiento</label>
                            <input
                            type="date"
                            className="form-control"
                            id="fnacimiento"
                            name="fnacimiento"
                            placeholder="Fecha de nacimiento ..."
                            required
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
                            name="fexpedicion"
                            placeholder="Fecha de expedición ..."
                            required
                            />
                        </div>
                        <div className="col-sm-6">
                        <label htmlFor="emailreg" className="form-label">Email</label>
                            <input
                            type="email"
                            className="form-control"
                            id="emailreg"
                            name="emailreg"
                            placeholder="Ingresa tu email …"
                            required
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
                            name="direccion"
                            placeholder="Ingresa tu dirección ..."
                            required
                            />
                        </div>
                        <div className="col-sm-6">
                        <label htmlFor="ciudadreg" className="form-label">Ciudad</label>
                            <input
                            type="text"
                            className="form-control"
                            id="ciudadreg"
                            name="ciudadreg"
                            placeholder="Ingresa tu contraseña …"
                            required
                            />
                        </div>
                        </div>
                        <div className="form-group row">
                        <div className="col-sm-6 mb-3 mb-sm-0">
                        <label htmlFor="passwordreg" className="form-label">Contraseña</label>
                            <input
                            type="password"
                            className="form-control"
                            id="passwordreg"
                            name="passwordreg"
                            placeholder="Ingresa tu contraseña ..."
                            required
                            />
                        </div>
                        <div className="col-sm-6">
                        <label htmlFor="passwordregconf" className="form-label">Confirmar contraseña</label>
                            <input
                            type="password"
                            className="form-control"
                            id="passwordregconf"
                            name="passwordregconf"
                            placeholder="Ingresa nuevamente tu contraseña …"
                            required
                            />
                        </div>
                        </div>
                        <br/>
                        <button
                        variant="primary" 
                        type="submit"
                        className="btn btn-primary btn-user btn-block"
                        style={{backgroundColor:"#0050A1"}}
                        >
                        Registrar
                        </button>
                    </form>
                    <div className="text-center">
                        <Link className="small" to="/login"
                        >Ya tienes una cuenta? Login!</Link>
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


export default Formreg