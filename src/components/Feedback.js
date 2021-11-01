import React, { Component } from "react";
import "./Feedback.css";

class Feedback extends Component {
  render() {
    return (
      <div className="fb-Tab">
        NAME:{this.props.name} | DEPARTMENT:{this.props.department} | RATING:{this.props.rating}
      </div>
    );
  }
}

export default Feedback;