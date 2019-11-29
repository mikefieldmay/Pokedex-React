import React, { useState } from "react";

import * as styles from "./InputScreen.css";

const placeholderText = "Please enter a pokemon to search for";

export const InputScreen = () => {
  const [placeholder, updatePlaceholder] = useState(
    placeholderText
  );
  const [value, setValue] = useState(
    ""
  );

  const handleOnBlur = () => {
    if( value === "") {
      updatePlaceholder(placeholderText)
    }
  }

  return (
    <div className={styles.PokedexMiniScreenContainer}>
      <div className={styles.PokedexMiniScreenButtonContainer}>
        <div className={styles.PokedexMiniScreenThinRedButton} />
        <div className={styles.PokedexMiniScreenThinBlueButton} />
      </div>
      <textarea
        onFocus={() => updatePlaceholder("")}
        onBlur={handleOnBlur}
        className={styles.PokedexMiniScreen}
        placeholder={placeholder}
      />
    </div>
  );
};
