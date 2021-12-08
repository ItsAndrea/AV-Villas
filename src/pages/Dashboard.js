import React from "react";
import Tablamov from "../components/Tablamov"
import Cancelar from "../components/Cancelar"
import Formtrans from "../components/Formtrans"

class Dashboard extends React.Component {

    render() {
        return (
            <div>
                <Tablamov />
                <Cancelar />
                <Formtrans />
            </div>
        )
    }
}

export default Dashboard