import React, { useState } from "react";

import { useStateValue } from '../../context/StateProvider'
import { setPokemonQuery } from "../../context/actions"

import * as styles from "./InputScreen.css";

const placeholderText = "Please enter a pokemon to search for";

export const InputScreen = () => {
  const [placeholder, updatePlaceholder] = useState(
    placeholderText
  );
  const [value, setValue] = useState(
    ""
  );

  const [ , dispatch ]: any = useStateValue()

  const handleOnBlur = () => {
    if(value === "") {
      updatePlaceholder(placeholderText)
    } else {
      dispatch(setPokemonQuery(value))
    }
    
  }

  return (
    <div className={styles.PokedexMiniScreenContainer}>
      <div className={styles.PokedexMiniScreenButtonContainer}>
        <div className={styles.PokedexMiniScreenThinRedButton} />
        <div className={styles.PokedexMiniScreenThinBlueButton} />
      </div>
      <textarea
        value={value}
        onChange={(event) => setValue(event.target.value)}
        onFocus={() => updatePlaceholder("")}
        onBlur={handleOnBlur}
        className={styles.PokedexMiniScreen}
        placeholder={placeholder}
      />
    </div>
  );
};
