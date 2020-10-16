import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <h1>{props.name}</h1>
      <img src={props.img} alt="" />
      <p>{props.phone}</p>
      <p>{props.email}</p>
    </div>
  );
};

export default Card;
