import React from "react";
import "../card/card.css";

const Card = ({ pokeData, loading }) => {
  console.log(pokeData);
  return (
    <>
      {loading ? (
        <h1>LOADING...</h1>
      ) : (
        pokeData.map((item) => (
          <div className="card"key={item.id}>
            <h2 className="cardNo">No:{item.id}</h2>
            <img src={item.sprites.front_default} className="cardImg" alt="" />
            <h2 className="cardName">{item.name}</h2>
          </div>
        ))
      )}
    </>
  );
};
export default Card;
