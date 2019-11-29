import React, { Component } from "react";

import { Header } from "./components/Header/Header";
import { Screen } from "./components/Screen/Screen";
import { Footer } from "./components/Footer/Footer";

import * as styles from "./index.css";

export class App extends Component {
  render() {
    return (
      <div className={styles.PokedexContainer}>
        <Header />
        <Screen />
        <Footer />
      </div>
    );
  }
}
