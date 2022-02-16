import React, { Component } from "react";
import "./ResForm.css";
import { addNewRes } from "./App/apiCalls";

class ResForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      date: "",
      time: "",
      number: null,
    };
  }

  handleChange = (e) => {
    const target = e.target;
    if (e.target.placeholder === "Name") {
      this.setState({ name: e.target.value });
    } else if (e.target.placeholder === "Date (mm/dd)") {
      this.setState({ date: e.target.value });
    } else if (e.target.placeholder === "Time") {
      this.setState({ time: e.target.value });
    } else if (e.target.placeholder === "Number of guests") {
      this.setState({ number: parseInt(e.target.value) });
    }
    console.log(this.state);
  };

  handleClick = (e) => {
    e.preventDefault();
    if (
      this.state.name !== "" &&
      this.state.date !== "" &&
      this.state.time !== "" &&
      this.state.number !== null
    ) {
      const res = { ...this.state };
      console.log("res", res);
      this.props.addRes(res);
      addNewRes(res.name, res.date, res.time, res.number);
    }
  };

  render() {
    return (
      <form className="form-deets">
        <input
          className="input-box"
          type="text"
          placeholder="Name"
          onChange={this.handleChange}
        />
        <input
          className="input-box"
          type="text"
          placeholder="Date (mm/dd)"
          onChange={this.handleChange}
        />
        <input
          className="input-box"
          type="text"
          placeholder="Time"
          onChange={this.handleChange}
        />
        <input
          className="input-box"
          type="number"
          placeholder="Number of guests"
          onChange={this.handleChange}
        />
        <button className="res-button" onClick={(e) => this.handleClick(e)}>
          Make Reservation
        </button>
      </form>
    );
  }
}

export default ResForm;

//{name: <String>, date: <String>, time: <String>, number: <Number>}
