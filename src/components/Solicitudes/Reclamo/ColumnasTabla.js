import React, { Component } from 'react'
import { Table, Button, Icon } from 'semantic-ui-react'

class ColumnasTabla extends Component {

    constructor( props ) {
        super()
    }

    render () {
        const { transaccion } = this.props
        return (
            <>
                <Table.Row>
                    <Table.Cell>{transaccion.id}</Table.Cell>
                    <Table.Cell>{transaccion.fecha}</Table.Cell>
                    <Table.Cell>{transaccion.hora}</Table.Cell>
                    <Table.Cell>{transaccion.descripcion}</Table.Cell>
                    <Table.Cell>{transaccion.valor}</Table.Cell>
                    <Table.Cell>
                        <Button color="green" animated>
                            <Button.Content visible>
                                <Icon name="pencil" />
                            </Button.Content>
                            <Button.Content hidden>
                                <Icon name="right arrow" />
                            </Button.Content>
                        </Button>
                        <Button color="red" animated="vertical">
                            <Button.Content visible>
                                <Icon name="trash" />
                            </Button.Content>
                            <Button.Content hidden>
                                <Icon name="remove" />
                            </Button.Content>
                        </Button>
                    </Table.Cell>
                </Table.Row>
            </>
        )
    }
}

export default ColumnasTabla