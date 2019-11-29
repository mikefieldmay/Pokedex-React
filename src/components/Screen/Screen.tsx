import React from "react";

import * as styles from "./Screen.css"

export const Screen = () => (
  <div className={styles.PokedexScreenContainer}>
    <div className={styles.PokedexScreenButtonWrapper}>
      <div className={styles.PokedexScreenButton} />
      <div className={styles.PokedexScreenButton} />
    </div>
    <div className={styles.PokedexScreen} />
    <div className={styles.PokedexScreenBottom}>
      <div className={styles.PokedexScreenBottomButton} />
      <div className={styles.PokedexScreenBurgerMenu}>
        <div className={styles.PokedexScreenBurgerMenuLine} />
        <div className={styles.PokedexScreenBurgerMenuLine} />
        <div className={styles.PokedexScreenBurgerMenuLine} />
        <div className={styles.PokedexScreenBurgerMenuLine} />
      </div>
    </div>
  </div>
);
