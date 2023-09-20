import axios from "axios";
import "../panel/panel.css";
import { useEffect, useState } from "react";
import Card from "../card/card";

import Info from "../info/info";

const Panel = () => {
  const [pokeData, setPokeData] = useState([]);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [loading, setLoading] = useState(true);
  const [pokeDex, setPokeDex] = useState();

  const pokePage = async () => {
    setLoading(true);
    const response = await axios.get(url);
    // console.log(response.data);
    setNextUrl(response.data.next);
    setPrevUrl(response.data.previous);
    getPokemon(response.data.results);
    setLoading(false);
  };

  const getPokemon = async (response) => {
    let data = [];
    for (const item of response) {
      const result = await axios.get(item.url);
      data.push(result.data);
    }
    data.sort((a, b) => (a.id > b.id ? 1 : -1));
    setPokeData(data);
  };

  useEffect(() => {
    pokePage();
  }, [url]);
  return ( 

    <div className="panelContainer">
      <div className="panelWrapper">
        <div className="panelLeft">
          <Card pokeData={pokeData} loading={loading} infoPokemon={poke=>setPokeDex(poke)} />
        </div>
        <div className="btn-group">
          <button
            onClick={() => {
              setPokeData([]);
              setUrl(prevUrl);
            }}
          >
            Previous
          </button>
          <button
            onClick={() => {
              setPokeData([]);
              setUrl(nextUrl);
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Panel;
