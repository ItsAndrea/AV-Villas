import Bienvenida from "../components/Bienvenida"
import Reclamo from "../components/Solicitudes/Reclamo"
import ReactDOM from 'react-dom';

const Solicitudes = () => {
    let clickBtnReclamo = () => {
        ReactDOM.render( <Reclamo />, document.getElementById( 'campo' ) );
    }; 

    let clickBtnCancelar = () => {
        ReactDOM.render( <Bienvenida />, document.getElementById( 'campo' ) );
    };

    let clickBtnCrear = () => {
        ReactDOM.render( <Bienvenida />, document.getElementById( 'campo' ) );
    };

    return (
        <div className="d-flex">
            <div className="content bg-light" style={{ "width": "45%", "height": "calc(100vh)", "borderRight": "2px solid #abacab" }}>

                <Bienvenida />
                <h5 className="pb-3 ms-3" style={{ "width": "300px", "borderBottom": "2px solid #000" }}>Solicitudes</h5>
                <button onClick={clickBtnCrear} className="btn btn-primary my-4 ms-3 p-3" style={{ "width": "300px" }}>Solicitud crear Cuenta</button>
                <button onClick={clickBtnCancelar} className="btn btn-primary mb-4 ms-3 p-3" style={{ "width": "300px" }}>Solicitud Cancelar Cuenta</button>
                <button onClick={clickBtnReclamo} className="btn btn-primary mb-4 ms-3 p-3" style={{ "width": "300px" }}>Solicitud Reclamo de Transacciones</button>
            </div>
            <div id="campo" className="w-100">
            </div>
        </div>
    )
}

export default Solicitudes