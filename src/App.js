import React from "react";
import Navbar from "./components/Navbar/";
import Formlogin from "./components/Formlogin"
import Formreg from "./components/Formreg"
import Tablamov from "./components/Tablamov"

class App extends React.Component {
  
  render() {
    return (
      <div>
        <Navbar />
        <Formreg />
        <Formlogin />
        <Tablamov />
      </div>
    );
  }
}

export default App;