import React from "react";
import styles from "./TarjetasCuentasT.module.css"
import { Card } from 'react-bootstrap';

function cuenta(){
  console.log("N° 1234")
  let estado = document.getElementsByName;
  if (estado === styles.seleccionado){
    estado = styles.noSeleccionado;
    return estado;
  }else{
    estado = styles.seleccionado;
    return estado;
  }return estado;
}

class TarjetaCuentasT extends React.Component {

    render() {
        return (
        <Card onClick={cuenta} id={styles.seleccionado}>
          <Card.Body>
            <Card.Title>Cuenta de ahorros</Card.Title>
            <Card.Text>
              N° 1234
            </Card.Text>
          </Card.Body>
        </Card>
        )
    }
}

export default TarjetaCuentasT