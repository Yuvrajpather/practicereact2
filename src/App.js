import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>EMPLOYEE FEEDBACK FORM</h1>
        <div className="formContainer">
          <Form />
        </div>
      </div>
    );
  }
}

export default App;
