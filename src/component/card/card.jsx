import React from "react";
import "../card/card.css";

const Card = () => {
  return (
    <>
      <div className="card">
        <img src="./src/assets/charmander.png" className="cardImg" alt="" />{" "}
        <h2 className="cardNo">No:1</h2>
        <h2 className="cardName">Charmander</h2>
        <p className="cardType">type:</p>
      </div>
    </>
  );
};

export default Card;
 