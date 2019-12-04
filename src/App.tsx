import React from "react";

import { Header } from "./components/Header/Header";
import { Screen } from "./components/Screen/Screen";
import { Footer } from "./components/Footer/Footer";

import * as styles from "./index.css";

export const App: React.FC = () => {
    return (
        <div className={styles.PokedexContainer} >
          <Header />
          <Screen />
          <Footer />
        </div>
    );
}
