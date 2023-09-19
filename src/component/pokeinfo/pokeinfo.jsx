import { Favorite, FlashOn, Security, Speed } from "@material-ui/icons";
import React from "react";
import "../pokeinfo/pokeinfo.css";

const Pokeinfo = () => {
  return (
    <>
      <div className="pokeContainer">
        <div className="pokeName">Charmander</div>
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg"
          alt=""
          className="pokeImg"
        />
        <div className="skill">
          <div className="pokeAbilities">
            <div className="group">
              <h2>Blaze</h2>
            </div>
          </div>
          <div className="pokeAbilities">
            <div className="group">
              <h2>Solar-power</h2>
            </div>
          </div>
        </div>
        <div className="base-stat">
          <ul className="pokeStatList">
            <li className="pokeStatListItem">
              <Favorite className="HP" /> HP : 39
            </li>
            <li className="pokeStatListItem">
              <FlashOn className="ATK" /> Attack : 52
            </li>
            <li className="pokeStatListItem">
              <Security className="DEF" /> Defense : 43
            </li>
            <li className="pokeStatListItem">
              <FlashOn className="ATK" /> Special-Atk : 60
            </li>
            <li className="pokeStatListItem">
              <Security className="DEF" /> Special-Def : 50
            </li>
            <li className="pokeStatListItem">
              <Speed className="SPD" /> Speed : 65
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Pokeinfo;
