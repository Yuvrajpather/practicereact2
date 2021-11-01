import React, { Component } from "react";
import "./Feedback2.css";
import Feedback from "./Feedback";

class Feedback2 extends Component {
  render() {
    return (
        <div className="fbContainer">
          {this.props.nameArr.map((item, idx) => {
            return (
              <Feedback
                e = {idx}
                name = {this.props.nameArr[idx]}
                department = {this.props.deptArr[idx]}
                rating = {this.props.rateArr[idx]}
              />
            );
          })}
        </div>
    );
  }
}

export default Feedback2;