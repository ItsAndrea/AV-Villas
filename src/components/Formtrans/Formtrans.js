import React from "react";
import { Form, Row, Col, Button } from 'react-bootstrap';


class Formtrans extends React.Component {
    
    

    render(){
        return(
            <Form>                
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>Numero de cuenta</Form.Label>
                    <Form.Control type="text" placeholder="Ingresa # de cuenta a transferir … " />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>Valor a transferir</Form.Label>
                    <Form.Control type="text" placeholder="Ingresa valor a transferir..." />
                    </Form.Group>

                    <Col>
                        <br />
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