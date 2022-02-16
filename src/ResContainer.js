import React, { Component } from "react";
import "./ResContainer.css";
import ResCard from "./ResCard";

const ResContainer = ({ reservations, deleteRes }) => {
  return (
    <div className="res-container">
      {reservations.map((reservation) => {
        return (
          <ResCard
            id={reservation.id}
            name={reservation.name}
            date={reservation.date}
            time={reservation.time}
            number={reservation.number}
            deleteRes={deleteRes}
          />
        );
      })}
    </div>
  );
};

export default ResContainer;
