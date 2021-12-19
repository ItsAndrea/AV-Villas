import React, { Component } from 'react'
import SeleccionarFecha from './Reclamo/SeleccionarFecha'

class Reclamo extends Component {

    render () {
        return (
            <div className="bienvenida pt-4 pb-3 px-3">
                <h3 className="border-0 border-bottom border-dark py-3 mb-4">Consulta tus Transacciones</h3>
                <SeleccionarFecha />
            </div>
        )
    }
}

export default Reclamo;