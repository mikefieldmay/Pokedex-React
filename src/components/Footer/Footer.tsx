import React from "react";

import * as styles from "./Footer.css";

export const Footer = () => (
  <div className={styles.PokedexBottom}>
    <div className={styles.PokedexBottomButton} />
    <div className={styles.PokedexMiniScreenContainer}>
      <div className={styles.PokedexMiniScreenButtonContainer}>
        <div className={styles.PokedexMiniScreenThinRedButton} />
        <div className={styles.PokedexMiniScreenThinBlueButton} />
      </div>
      <div className={styles.PokedexMiniScreen}>
        <p className={styles.PokedexScreenText}>Pikachu</p>
      </div>
    </div>
    <div className={styles.PokedexTouchpadContainer}>
      <div className={styles.PokedexTouchpadUp} />
      <div className={styles.PokedexTouchpadLeft} />
      <div className={styles.PokedexTouchpadMiddle} />
      <div className={styles.PokedexTouchpadRight} />
      <div className={styles.PokedexTouchpadBottom} />
    </div>
  </div>
);
