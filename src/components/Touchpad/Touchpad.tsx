import React from "react";

import * as styles from "./Touchpad.css";

export const Touchpad = () => (
  <div className={styles.PokedexTouchpadContainer}>
    <div className={styles.PokedexTouchpadUp} />
    <div className={styles.PokedexTouchpadLeft} />
    <div className={styles.PokedexTouchpadMiddle} />
    <div className={styles.PokedexTouchpadRight} />
    <div className={styles.PokedexTouchpadBottom} />
  </div>
);
