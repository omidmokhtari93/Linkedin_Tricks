import React, { useState } from "react";
import styles from "./styles.module.css";
import { XPlayer, OPlayer, winnerChecker } from "./Players";

export const TicTacToe = () => {
  const [player, setPlayer] = useState("X");
  const [playerArray, setPlayerArray] = useState([...new Array(9)]);
  const [winner, setWinner] = useState("");

  const onclickBox = (index) => {
    let updatedPlayerArray = [];
    if (player == "X") {
      if (playerArray[index] != "O") {
        updatedPlayerArray = playerArray.map((x, idx) =>
          idx == index ? "X" : x
        );
        setPlayerArray(updatedPlayerArray);
        setPlayer("O");
      }
    } else {
      if (playerArray[index] != "X") {
        updatedPlayerArray = playerArray.map((x, idx) =>
          idx == index ? "O" : x
        );
        setPlayerArray(updatedPlayerArray);
        setPlayer("X");
      }
    }
    const winner = winnerChecker(updatedPlayerArray);
    setWinner(winner);
    console.log(winner);
  };

  const resetGame = () => {
    setPlayerArray([...new Array(9)]);
    setPlayer("X");
    setWinner("");
  };

  return (
    <React.Fragment>
      <p className="mb-0">Tic Tac Toe</p>
      <hr />
      <div className="text-center">{player} player turn</div>
      <div className="text-center">
        <a
          style={{ cursor: "pointer" }}
          className="color-primary"
          onClick={() => resetGame()}
        >
          Reset
        </a>
      </div>
      {/* {winner && (
        <div className="text-center text-danger">{winner} is winner</div>
      )} */}
      <div className={styles.ticTacToeContainer}>
        <div className={styles.ticTacToe}>
          {
            <div
              className={
                styles.ticTacToeGameResult +
                " " +
                (winner ? styles.ticTacToeGameResultFinished : null)
              }
            >
              {winner
                ? `${winner} ${winner !== "Game Over" ? "is winner" : ""}`
                : ""}
            </div>
          }
          {playerArray.map((x, index) => (
            <div
              key={index}
              className={
                styles.ticTacToeBox +
                ` ${winner ? styles.ticTacToeBoxFinished : null}`
              }
              onClick={() => onclickBox(index)}
            >
              {playerArray[index] == "X"
                ? XPlayer
                : playerArray[index] == "O"
                ? OPlayer
                : null}
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};
