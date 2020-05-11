import React from "react";
import "./styles.css";
import Pokemones from "./components/Pokemones";
import { Provider } from "react-redux";
import generateStore from "./redux/store";

export default function App() {
  const store = generateStore();

  return (
    <Provider store={store}>
      <Pokemones />
    </Provider>
  );
}
