import React from "react";
import { Form, Row, Col, Button, Alert } from 'react-bootstrap';

var hoy = new Date();
var fecha = hoy.getDate() + '/' + ( hoy.getMonth() + 1 ) + '/' + hoy.getFullYear();
var hora = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds();


class Formtrans extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            fecha: fecha,
            hora: hora,
            cuentaorig:'0001',
            cuentadest:'',
            descripción:'',
            valor:0,
            cobro1p:0,
            total:0
        };
  
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
        this.setState({ 
            cuentadest: event.target.destinot,
            descripción: event.target.destinot,
            valor:  parseFloat(event.target.valor),
            cobro1p: parseFloat(event.target.valort) * 0.01,
            total: (parseFloat(event.target.valort) * 0.01) + parseFloat(event.target.valort)
        
        });
    }
  
    handleSubmit(event) {
        event.preventDefault();
        console.log({cuenta:this.state});
    }
    
    

    render(){
        return(
            <Form onSubmit={this.handleSubmit}>         
                <Row className="mb-3">
                    <Form.Group as={Col}>
                    <Form.Label>Numero de cuenta</Form.Label>
                    <Form.Control type="text" name="destinot" value={this.state.destinot} onChange={this.handleChange} placeholder="Ingresa # de cuenta a transferir … " />
                    </Form.Group>

                    <Form.Group as={Col}>
                    <Form.Label>Valor a transferir</Form.Label>
                    <Form.Control type="text" name="valort" value={this.state.valort} onChange={this.handleChange} placeholder="Ingresa valor a transferir..." />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                <Col>
                    <Alert variant='warning'>Revisa los datos ingresados !</Alert>
                </Col>
                
                <Col>
                    <Button variant="primary" type="submit" style={{background:"#0050A1"}}>
                        Transferir
                    </Button>
                </ Col>
                </Row>
            </Form>
        )
    }
}

export default Formtrans