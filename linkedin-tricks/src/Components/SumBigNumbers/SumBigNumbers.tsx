import React, { useState } from "react";

const splitReverseNumber = (x: string) =>
  x
    .split("")
    .reverse()
    .map((x) => +x);

const numberWithCommas = (x: string) => {
  return x
    .split("")
    .reverse()
    .join("")
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const SumBigNumbers = () => {
  const [numberOne, setNumberOne] = useState("");
  const [numberTwo, setNumberTwo] = useState("");
  const [result, setResult] = useState("");

  const calculate = () => {
    let result = "";
    let carry = 0;
    let numberOneArr = splitReverseNumber(
      numberOne.length > numberTwo.length ? numberOne : numberTwo
    );
    let numberTwoArr = splitReverseNumber(
      numberOne.length > numberTwo.length ? numberTwo : numberOne
    );

    numberOneArr.map((x, index) => {
      let sum = x + (numberTwoArr[index] || 0) + carry;
      if (sum >= 10) {
        result += (sum % 10).toString();
        carry = 1;
      } else {
        result += sum;
        carry = 0;
      }
      if (carry && index == numberOneArr.length - 1) {
        result += carry;
        carry = 0;
      }
    });
    setResult(numberWithCommas(result));
  };

  return (
    <React.Fragment>
      <p>Sum of two big numbers in JS</p>
      <hr />
      <input
        type="number"
        className="w-100 mb-2"
        placeholder="big number a"
        value={numberOne}
        onChange={(e) => setNumberOne(e.target.value)}
      />
      <input
        type="number"
        className="w-100 mb-2"
        placeholder="big number b"
        value={numberTwo}
        onChange={(e) => setNumberTwo(e.target.value)}
      />
      <button onClick={calculate} className="w-100">
        Sum
      </button>
      <br />
      <br />
      <code>and the result is : </code>
      <br />
      <code>{result}</code>
    </React.Fragment>
  );
};
