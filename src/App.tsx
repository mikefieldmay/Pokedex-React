import React, { Component } from "react";

import * as styles from './index.css'

export class App extends Component {
  render() {
    return (
      <div className={styles.PokedexContainer}>
        {/* HEADER */}
        <div className={styles.PokedexHeader}>
          <div className={styles.PokedexHeaderButtonContainer}>
            <div className={styles.PokedexHeaderButtonRed}></div>
            <div className={styles.PokedexHeaderButtonYellow}></div>
            <div className={styles.PokedexHeaderButtonGreen}></div>
          </div>
          <div className={styles.PokedexHeaderTop}></div>
          <div className={styles.PokedexHeaderLeft}>
            <div className={styles.PokedexHeaderMainCircle}>
              <div className={styles.PokedexHeaderInnerCircle}></div>
            </div>
          </div>
          <div className={styles.PokedexHeaderCurve}></div>
        </div>
        {/* SCREEN */}
        <div className={styles.PokedexScreenContainer}>
          <div className={styles.PokedexScreenButtonWrapper}>
            <div className={styles.PokedexScreenButton}></div>
            <div className={styles.PokedexScreenButton}></div>
          </div>
          <div className={styles.PokedexScreen}></div>
          <div className={styles.PokedexScreenBottom}>
            <div className={styles.PokedexScreenBottomButton}></div>
            <div className={styles.PokedexScreenBurgerMenu}>
              <div className={styles.PokedexScreenBurgerMenuLine}></div>
              <div className={styles.PokedexScreenBurgerMenuLine}></div>
              <div className={styles.PokedexScreenBurgerMenuLine}></div>
              <div className={styles.PokedexScreenBurgerMenuLine}></div>
            </div>
          </div>
        </div>
        {/* FOOTER */}
        <div className={styles.PokedexBottom}>
          <div className={styles.PokedexBottomButton}></div>
          {/* MINISCREEN */}
          <div className={styles.PokedexMiniScreenContainer}>
            <div className={styles.PokedexMiniScreenButtonContainer}>
              <div className={styles.PokedexMiniScreenThinRedButton}></div>
              <div className={styles.PokedexMiniScreenThinBlueButton}></div>
            </div>
            <div className={styles.PokedexMiniScreen}>
              <p className={styles.PokedexScreenText}>Pikachu</p>
            </div>
          </div>
          {/* TOUCHPAD */}
          <div className={styles.PokedexTouchpadContainer}>
            <div className={styles.PokedexTouchpadUp}></div>
            <div className={styles.PokedexTouchpadLeft}></div>
            <div className={styles.PokedexTouchpadMiddle}></div>
            <div className={styles.PokedexTouchpadRight}></div>
            <div className={styles.PokedexTouchpadBottom}></div>
          </div>
        </div>
      </div>
    );
  }
}
