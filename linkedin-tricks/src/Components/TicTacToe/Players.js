import React from "react";
import * as styles from "./styles.module.css";

export const XPlayer = <span className={styles.X_player}>✕</span>;
export const OPlayer = <span className={styles.O_player}></span>;

const patternToIndex = (x) => {
  return x
    .split("")
    .map((x, index) => x === "X" && index + "")
    .filter((x) => x)
    .map((x) => +x);
};

const winingPattern = [
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
  const allPatternsIndex = winingPattern.map(patternToIndex);
  const xMovesIndex = patternToIndex(xMoves);
  const oMovesIndex = patternToIndex(oMoves);
  const checkxIndexes = allPatternsIndex.some((x) =>
    x.every((z) => xMovesIndex.includes(z))
  );

  const checkoIndexes = allPatternsIndex.some((x) =>
    x.every((z) => oMovesIndex.includes(z))
  );

  if (checkxIndexes) {
    return "X";
  }
  if (checkoIndexes) {
    return "O";
  }
  const arr = [...xMovesIndex, ...oMovesIndex];
  if (arr.length == 9) {
    return "Game Over";
  }
  return "";
};
