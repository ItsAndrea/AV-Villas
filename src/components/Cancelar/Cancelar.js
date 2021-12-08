import React from "react";
import { Form, Row, Col, Button } from 'react-bootstrap';

class Cancelar extends React.Component {
  constructor(props) {
      super(props);
      this.state = { value: '' };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
      this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
      alert('Se envió una solicitud de cancelación: ' + this.state.value);
      event.preventDefault();
      console.log({cuenta:this.state.value});
  }

    render() {
        return (

            <Form onSubmit={this.handleSubmit}>                
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>Num. de cancelación</Form.Label>
                    <Form.Control type="text" value={this.state.value} onChange={this.handleChange} placeholder="Ingresa # de cuenta a cancelar … " />
                    </Form.Group>

                    <Col>
                        <br />
                        <Button variant="primary" type="submit" style={{background:"#0050A1"}}>
                            Cancelar
                        </Button>
                    </ Col>
              
                </Row>
            </Form>
          
        )
    }
}

export default Cancelar

