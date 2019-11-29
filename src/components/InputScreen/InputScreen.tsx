import React from "react";

import * as styles from "./InputScreen.css";

export const InputScreen = () => (
  <div className={styles.PokedexMiniScreenContainer}>
    <div className={styles.PokedexMiniScreenButtonContainer}>
      <div className={styles.PokedexMiniScreenThinRedButton} />
      <div className={styles.PokedexMiniScreenThinBlueButton} />
    </div>
    <div className={styles.PokedexMiniScreen}>
      <p className={styles.PokedexScreenText}>Pikachu</p>
    </div>
  </div>
);
