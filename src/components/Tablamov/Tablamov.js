import React from "react";
import { Table } from 'react-bootstrap';

class Tablamov extends React.Component {

    render() {
        return (
        <Table responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Fecha</th>
                <th>Hora</th> 
                <th>Descripción</th> 
                <th>Valor</th> 
              </tr>
            </thead>
            <tbody>
              <tr style={{background:"#0050A1", color:"white"}}>
                <td>1</td>
                <td>01/08/2021</td>
                <td>14:35</td>
                <td>Pago servicio público</td>
                <td>$2500000</td>
              </tr>
              <tr style={{background:"#0050A1", color:"white"}}>
                <td>2</td>
                <td>01/08/2021</td>
                <td>14:35</td>
                <td>Pago servicio público</td>
                <td>$2500000</td>
              </tr>
            </tbody>
        </Table>
        )
    }
}

export default Tablamov