import React from "react";
//useDispatch sirve para consumir la acción, useSelector para leer el array del state
import { useDispatch, useSelector } from "react-redux";
import { obtenerPokeActions, siguientePokesAction } from "../redux/pokemon";

const Pokemones = () => {
  const dispatch = useDispatch(); //llamar a la acción

  const pokemones = useSelector(store => store.pokemones.array);

  return (
    <div>
      Lista de Pokemones
      <br />
      <hr />
      <br />
      <button onClick={() => dispatch(obtenerPokeActions())}>
        Obtener Pokemones
      </button>
      <br />
      <button onClick={() => dispatch(siguientePokesAction(20))}>
        Siguiente
      </button>
      <br />
      <ul>
        {pokemones.map(poke => (
          <li key={poke.name}>{poke.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Pokemones;
