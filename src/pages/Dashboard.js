import React from "react";
import Tablamov from "../components/Tablamov"
import Cancelar from "../components/Cancelar"
import Formtrans from "../components/Formtrans"
import TarjetaCuentasT from "../components/TarjetaCuentasT"

class Dashboard extends React.Component {

    render() {
        return (
            <div>
                <Tablamov />
                <Cancelar />
                <TarjetaCuentasT />
                <Formtrans />
            </div>
        )
    }
}

export default Dashboard