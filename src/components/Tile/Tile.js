import React from "react";
import styles from "./Tile.module.css";
import knight from "../../assets/Chess_nlt45.svg";
import pawn from "../../assets/Chess_plt45.svg";
import bishop from "../../assets/Chess_blt45.svg";
import rook from "../../assets/Chess_rlt45.svg";
import king from "../../assets/Chess_klt45.svg";
import queen from "../../assets/Chess_qlt45.svg";

const Tile = ({
  number,
  posName,
  knightPos,
  setKnightPos,
  posNum,
  setKnightNum,
  moves,
  changePos,
  setChangePos,
  chessmen,
  unavailable,
}) => {
  const { pawns, rooks, bishops, queens, kings } = chessmen;
  const setPos = (pos) => {
    if (changePos && !unavailable.includes(pos)) {
      setKnightPos(posName);
      setKnightNum(posNum);
      setChangePos(false);
    } else if (moves.includes(pos)) {
      setKnightPos(posName);
      setKnightNum(posNum);
    }
  };
  if (number % 2 === 0) {
    return (
      <div
        className={`${styles.blackTile} ${
          moves.includes(posName) && styles.possibleMove
        }`}
        onClick={() => setPos(posName)}
      >
        {knightPos === posName && (
          <img src={knight} className={styles.image} alt="knight" />
        )}
        {pawns.includes(posName) && (
          <img className={styles.image} src={pawn} alt="pawn" />
        )}
        {bishops.includes(posName) && (
          <img className={styles.image} src={bishop} alt="bishop" />
        )}
        {rooks.includes(posName) && (
          <img className={styles.image} src={rook} alt="rook" />
        )}
        {kings.includes(posName) && (
          <img className={styles.image} src={king} alt="king" />
        )}
        {queens.includes(posName) && (
          <img className={styles.image} src={queen} alt="queen" />
        )}
      </div>
    );
  }

  return (
    <div
      className={`${styles.whiteTile} ${
        moves.includes(posName) && styles.possibleMove
      }`}
      onClick={() => setPos(posName)}
    >
      {knightPos === posName && (
        <img src={knight} className={styles.image} alt="knight" />
      )}
      {pawns.includes(posName) && (
        <img className={styles.image} src={pawn} alt="pawn" />
      )}
      {bishops.includes(posName) && (
        <img className={styles.image} src={bishop} alt="bishop" />
      )}
      {rooks.includes(posName) && (
        <img className={styles.image} src={rook} alt="rook" />
      )}
      {kings.includes(posName) && (
        <img className={styles.image} src={king} alt="king" />
      )}
      {queens.includes(posName) && (
        <img className={styles.image} src={queen} alt="queen" />
      )}
    </div>
  );
};

export default Tile;
