import React from "react";

export const AllObjectMethods = () => {
  const array = [0, 1, 2, 3, 4, 5, 6];

  return (
    <React.Fragment>
      <p>All Object Methods</p>
      <hr />
      <code className="text-body">{"const array = [0, 1, 2, 3, 4, 5, 6]"}</code>
      <br />
      <code>
        {"array.map(x => x == 2 ? x * 2 : x)"} {"=>"}{" "}
        {JSON.stringify(array.map((x) => (x == 2 ? x * 2 : x)))}
        <br />
        //* check you condition on each element of array and return true or false
        {"array.every(x => x >= 0) => "}
        {JSON.stringify(array.every((x) => x >= 0))}
        <br />
        //* concat used for merge multiple array
        {"array.concat([7, 8, 9]) => "}
        {JSON.stringify(array.concat([7, 8, 9]))}
        <br />
        {"array.reverse() => "}
        {JSON.stringify(array.reverse())}
        <br />
        {"array.map(Math.round) => "}
        {JSON.stringify(array.map(Math.round))}
        <br />
        {"array.sort() => "}
        {JSON.stringify(array.sort())}
        <br />
        {"array.shift() => "}
        {JSON.stringify(array.shift())}
        <br />
        {"array.fill(10) => "}
        {JSON.stringify(array.fill(10))}
        <br />
        {"array.reduce((a, b) => a + b) => "}
        {JSON.stringify(array.reduce((a, b) => a + b))}
        <br />
        {"array.some(Number) => "}
        {JSON.stringify(array.some(Number))}
      </code>
    </React.Fragment>
  );
};
