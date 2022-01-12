import React, { useState, useEffect } from "react";
import Tile from "../Tile/Tile";
import styles from "./Chessboard.module.css";

const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];
const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];
const pawns = ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2"];
const rooks = ["a1", "h1"];
const bishops = ["c1", "f1"];
const queens = ["d1"];
const kings = ["e1"];
const knights = ["b1", "g1"];
const unavailable = [...pawns, ...rooks, ...bishops, ...queens, ...kings];

const Chessboard = () => {
  const [knightPos, setKnightPos] = useState("b1");
  const [knightNum, setKnightNum] = useState([
    horizontalAxis.indexOf(knightPos[0]),
    verticalAxis.indexOf(knightPos[1]),
  ]);
  const [moves, setMoves] = useState([]);
  const [changePos, setChangePos] = useState(false);

  const chessmen = { pawns, rooks, bishops, queens, kings, knights };

  const board = [];

  useEffect(() => {
    const newMoves = [
      horizontalAxis[knightNum[0] - 1] + verticalAxis[knightNum[1] + 2], //up>up>left
      horizontalAxis[knightNum[0] + 1] + verticalAxis[knightNum[1] + 2], //up>up>right
      horizontalAxis[knightNum[0] - 2] + verticalAxis[knightNum[1] + 1], //left>left>up
      horizontalAxis[knightNum[0] - 2] + verticalAxis[knightNum[1] - 1], //left>left>down
      horizontalAxis[knightNum[0] + 2] + verticalAxis[knightNum[1] - 1], //right>right>down
      horizontalAxis[knightNum[0] + 2] + verticalAxis[knightNum[1] + 1], //right>right>up
      horizontalAxis[knightNum[0] - 1] + verticalAxis[knightNum[1] - 2], //down>down>left
      horizontalAxis[knightNum[0] + 1] + verticalAxis[knightNum[1] - 2], //down>down>right
    ];
    setMoves(
      newMoves.filter((move) => move.length <= 2 && !unavailable.includes(move))
    );
  }, [knightNum]);

  for (let i = verticalAxis.length - 1; i >= 0; i--) {
    for (let j = 0; j < horizontalAxis.length; j++) {
      const num = j + i + 2;
      const posName = horizontalAxis[j] + verticalAxis[i];
      board.push(
        <Tile
          number={num}
          posName={posName}
          knightPos={knightPos}
          setKnightNum={setKnightNum}
          setKnightPos={setKnightPos}
          key={posName}
          posNum={[j, i]}
          moves={moves}
          changePos={changePos}
          setChangePos={setChangePos}
          chessmen={chessmen}
          unavailable={unavailable}
        />
      );
    }
  }
  return (
    <div className={styles.main}>
      <div className={styles.board}>{board}</div>
      <div className={styles.boardContent}>
        <div>
          <p>Current Position: {knightPos}</p>
          <p>Possible moves: {moves.sort().join(", ")}</p>
        </div>
      </div>
      <button className={styles.button} onClick={() => setChangePos(true)}>
        {`${changePos ? "Setting" : "Set"} Knight position`}
      </button>
    </div>
  );
};

export default Chessboard;
