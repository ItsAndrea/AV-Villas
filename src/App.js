import React from "react";
import Navbar from "./components/Navbar/";
import Formlogin from "./components/Formlogin"
import Formreg from "./components/Formreg"

class App extends React.Component {
  
  render() {
    return (
      <div>
        <Navbar />
        <Formreg />
        <Formlogin />
      </div>
    );
  }
}

export default App;