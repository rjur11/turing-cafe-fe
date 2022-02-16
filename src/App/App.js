import React, { Component } from "react";
import "./App.css";
import { getAllReservations } from "./apiCalls";
import ResContainer from "../ResContainer";
import ResForm from "../ResForm";

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: [],
    };
  }

  componentDidMount = () => {
    getAllReservations()
      .then((reservations) => this.setState({ reservations: reservations }))
      .catch((error) => this.setState({ error: true }));
  };

  addRes = (res) => {
    this.setState({ reservations: [...this.state.reservations, res] });
  };

  deleteRes = (id) => {
    console.log(id);
    const updatedReservations = this.state.reservations.filter(
      (reservation) => reservation.id !== id
    );
    this.setState({ reservations: updatedReservations });
  };

  render() {
    return (
      <div className="App">
        <h1 className="app-title">Turing Cafe Reservations</h1>
        <div className="resy-form">
          <ResForm addRes={this.addRes} />
          <ResContainer
            reservations={this.state.reservations}
            deleteRes={this.deleteRes}
          />
        </div>
        <div className="resy-container"></div>
      </div>
    );
  }
}

export default App;
