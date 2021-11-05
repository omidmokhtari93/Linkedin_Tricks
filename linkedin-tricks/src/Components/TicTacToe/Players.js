import React from "react";
import * as styles from "./styles.module.css";

export const XPlayer = <span className={styles.X_player}>✕</span>;
export const OPlayer = <span className={styles.O_player}></span>;

const winAlgorithm = [
  "XXX000000",
  "000XXX000",
  "000000XXX",
  "X00X00X00",
  "0X00X00X0",
  "00X00X00X",
  "X000X000X",
  "00X0X0X00",
];

export const winnerChecker = (playerArray) => {
  const xMoves = playerArray.map((x) => (x == "X" ? "X" : "0")).join("");
  const oMoves = playerArray.map((x) => (x == "O" ? "X" : "0")).join("");
  if (winAlgorithm.includes(xMoves)) {
    return "X";
  }
  if (winAlgorithm.includes(oMoves)) {
    return "O";
  }
  const arr = playerArray.join("");
  if (!arr.includes("0")) {
    return "Game Over";
  }
  return "";
};
