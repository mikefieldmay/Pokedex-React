import React from "react";

import * as styles from './header.css';

export const Header = () => (
  <div className={styles.PokedexHeader}>
    <div className={styles.PokedexHeaderButtonContainer}>
      <div className={styles.PokedexHeaderButtonRed} />
      <div className={styles.PokedexHeaderButtonYellow} />
      <div className={styles.PokedexHeaderButtonGreen} />
    </div>
    <div className={styles.PokedexHeaderTop} />
    <div className={styles.PokedexHeaderLeft}>
      <div className={styles.PokedexHeaderMainCircle}>
        <div className={styles.PokedexHeaderInnerCircle} />
      </div>
    </div>
    <div className={styles.PokedexHeaderCurve} />
  </div>
);
