import React, { Component } from 'react'
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
import { Button } from 'semantic-ui-react'
import transacciones from '../../../api/transacciones'
import TablaTransacciones from './TablaTransacciones';

class SeleccionarFecha extends Component {
    constructor() {
        super()

        this.state = {
            fechaSeleccionada: new Date(),
            fechaSeleccionada2: new Date(),
            datosT: null,
            tablaVisible: false
        }
    }

    renderTabla () {
        const { tablaVisible, datosT } = this.state

        if ( tablaVisible ) {
            return <TablaTransacciones transacciones={datosT} />
        }
    }

    cambiarFecha = ( newFecha ) => {
        this.setState( { fechaSeleccionada: new Date( newFecha.target.value ) } )
    }

    cambiarFecha2 = ( newFecha ) => {
        this.setState( { fechaSeleccionada2: new Date( newFecha.target.value ) } )
    }

    consultar () {
        const { fechaSeleccionada, fechaSeleccionada2 } = this.state
        const fecha1 = fechaSeleccionada.getDate().toString() + '/' + ( fechaSeleccionada.getMonth() + 1 ).toString() + '/' + fechaSeleccionada.getFullYear().toString();
        const fecha2 = fechaSeleccionada2.getDate().toString() + '/' + ( fechaSeleccionada2.getMonth() + 1 ).toString() + '/' + fechaSeleccionada2.getFullYear().toString();

        const datos = transacciones
        const prueba = []

        datos.forEach( element => {
            if ( ( this.procesarFecha( element.fecha ) >= this.procesarFecha( fecha1 ) ) && ( this.procesarFecha( element.fecha ) <= this.procesarFecha( fecha2 ) ) ) {
                prueba.push( element )
            }
        } );

        this.setState( { datosT: prueba, tablaVisible: true } )


    }

    procesarFecha ( date ) {
        var parts = date.split( "/" );
        return new Date( parts[2], parts[1] - 1, parts[0] );
    }

    render () {
        const { fechaSeleccionada, fechaSeleccionada2 } = this.state
        return (
            <div>
                <div className="d-flex mb-4 justify-content-between">
                        <div className="w-25"><DatePickerComponent value={fechaSeleccionada} format={"dd 'de' MMMM 'de' yyyy"} onChange={this.cambiarFecha} ></DatePickerComponent></div>
                        <div className="w-25"><DatePickerComponent value={fechaSeleccionada2} format={"dd 'de' MMMM 'de' yyyy"} onChange={this.cambiarFecha2} ></DatePickerComponent></div>
                    <Button color='blue' onClick={() => this.consultar()}>
                        Consultar
                    </Button>
                </div>
                <div>
                    {this.renderTabla()}
                </div>
            </div>
        )
    }
}

export default SeleccionarFecha