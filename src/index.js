import React from "react";
import ReactDom from "react-dom";
import "babel-polyfill";
import { App } from "./App";
import { StateProvider } from "./context/StateProvider";
import { reducer, defaultState } from './context/reducer'

import "./index.css";

const PokemonApp = () => (
  <StateProvider initialState={defaultState} reducer={reducer}>
    <App />
  </StateProvider>
);

ReactDom.render(<PokemonApp />, document.getElementById("root"));
