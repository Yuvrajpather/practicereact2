import React, { Component } from "react";
import "./Form.css";
import Feedback2 from "./Feedback2";

class Form extends Component {
  state = {
    id: null,
    name: [],
    department: [],
    rating: [],
  };

  fbElement = (elem) => {
    elem.preventDefault();
    let arg = new Date();
    let employeeName = document.getElementById("eName").value;
    let employeeDepartment = document.getElementById("eDep").value;
    let employeeRating = document.getElementById("eRate").value;
    this.setState({ id: arg.getTime() });
    this.state.name.push(employeeName);
    this.state.department.push(employeeDepartment);
    this.state.rating.push(employeeRating);
    document.getElementById("eName").value = "";
    document.getElementById("eDep").value = "";
    document.getElementById("eRate").value = "";
  };

  render() {
    return (
      <div className="formContainer">
        <form
          className="fbForm"
          onSubmit={(r1) => this.fbElement(r1)}
        >
          <div>
            <label htmlFor="eName">NAME:</label>
            <input type="text" id="eName" required></input>
          </div>
          <div>
            <label htmlFor="eDep">DEPARTMENT:</label>
            <input type="text" id="eDep" required></input>
          </div>
          <div>
            <label htmlFor="eRate">RATING:</label>
            <input type="text" id="eRate" required></input>
          </div>
          <div>
            <button type="submit">submit</button>
          </div>
          <div>
            <hr/>
          </div>
        </form>

        {this.state.name.length !== 0 ? (
          <Feedback2
            nameArr = {this.state.name}
            deptArr = {this.state.department}
            rateArr = {this.state.rating}
          />
        ) : null}
      </div>
    );
  }
}

export default Form;