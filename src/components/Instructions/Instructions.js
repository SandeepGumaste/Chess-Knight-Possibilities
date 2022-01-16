import React from "react";
import styles from "./Instructions.module.css";
const Instructions = ({ setShowRules }) => {
  return (
    <div className={styles.instructions}>
      <div className={styles.instructionsHeader}>
        <h1>Instructions</h1>
        <button className={styles.button} onClick={() => setShowRules(false)}>
          close
        </button>
      </div>
      <ul>
        <li>
          Initial position of the knight is set to b1. To change the position,
          follow the below given instructions.
        </li>
        <li>Click on set knight position to set the position of the knight.</li>
        <li>
          Set the position of the knight by clicking on any of the empty tiles.
          <ul>
            <li>Until you select a tile, the button will be disabled.</li>
            <li>You cannot select a tile that's already occupied.</li>
          </ul>
        </li>
        <li>
          Any tile with a blinking yellow border is a possible move for the
          selected position of the knight.
        </li>
        <li>
          If its a possible move, you can click on the tile to change the
          position the knight without clicking on the 'set knight position'
          button.
        </li>
      </ul>
    </div>
  );
};

export default Instructions;
