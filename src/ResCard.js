import React from "react";
import "./ResCard.css";

const ResCard = ({ id, name, date, time, number, deleteRes }) => {
  return (
    <div className="res-details">
      <h1>{name}</h1>
      <p>{date}</p>
      <p>{`${time} pm`}</p>
      <p>{`Number of guests: ${number}`}</p>
      <button className="button" onClick={() => deleteRes(id)}>
        Cancel
      </button>
    </div>
  );
};

export default ResCard;
