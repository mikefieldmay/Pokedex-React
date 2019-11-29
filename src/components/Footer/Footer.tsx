import React from "react";

import { InputScreen } from "../InputScreen/InputScreen";
import { Touchpad } from "../Touchpad/Touchpad";

import * as styles from "./Footer.css";

export const Footer = () => (
  <div className={styles.PokedexBottom}>
    <>
      <button className={styles.PokedexBottomButton} />
    </>
    <InputScreen />
    <Touchpad />
  </div>
);
