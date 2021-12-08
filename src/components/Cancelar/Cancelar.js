import React from "react";

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
          <form onSubmit={this.handleSubmit}>
          <label>
              Num. de cancelación: <br/>
              <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" style={{background:"#0050A1", color:"white"}}/>
          
      </form>
        )
    }
}

export default Cancelar