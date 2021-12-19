import React, { Component } from "react";
import { Dimmer, Image, Loader, Segment, Table } from 'semantic-ui-react'
import ColumnasTabla from './ColumnasTabla'
import transacciones from '../../../api/transacciones'

class TablaTransacciones extends Component {

    constructor( props ) {
        super()

        this.state = {
            transacciones: null,
            visible: false
        }
    }

    componentDidMount () {
        setTimeout( () => {
            this.getTransacciones();
        }, 1500 );
    }

    getTransacciones () {
        this.setState( { transacciones: transacciones } )
        this.setState( {visible: true } )
    }

    validar () {
        const { transacciones } = this.props

        if ( !transacciones.length ) {
            return (
                <Table.Row textAlign="center">
                    <Table.Cell colSpan='6' >No hay datos disponibles</Table.Cell>
                    {this.setState( {visible:false } )}
                </Table.Row> )
        } else {
            return (
                transacciones.map( transaccion =>
                    <ColumnasTabla key={transaccion.id} transaccion={transaccion} />
                ) )
        }
    }

    render () {
        const { transacciones } = this.props

        if ( this.state.visible === false ) {
            return (
                <Segment>
                    <Dimmer active inverted>
                        <Loader indeterminate><h3>Recuperando datos...</h3></Loader>
                    </Dimmer>
                    <Image src="/images/paragraph.png" />
                </Segment>

            )
        } else {
            return (
                <div>
                    <Table fixed>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>#</Table.HeaderCell>
                                <Table.HeaderCell>Fecha</Table.HeaderCell>
                                <Table.HeaderCell>Hora</Table.HeaderCell>
                                <Table.HeaderCell>Descripción</Table.HeaderCell>
                                <Table.HeaderCell>Valor</Table.HeaderCell>
                                <Table.HeaderCell>Acciones</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {console.log( transacciones )}
                            {this.validar()}
                        </Table.Body>
                    </Table>
                </div>
            )
        }

    }
}


export default TablaTransacciones