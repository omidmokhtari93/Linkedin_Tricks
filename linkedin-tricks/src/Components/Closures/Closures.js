import React from "react";

export const Closures = () => {
  function Welcome(name) {
    let greetingInfo = function (message) {
      return message + " " + name;
    };
    return greetingInfo;
  }
  let myFunction = Welcome("John");

  return (
    <div>
      <p>Closures</p>
      <hr />
      <code className="text-dark">
        {`function Welcome(name) {`}
        <br />
        <span className="ms-3">{`let greetingInfo = function (message) {`}</span>
        <br />
        <span className="ms-4">{`return message + " " + name;`}</span>
        <br />
        <span className="ms-3">{`};`}</span>
        <br />
        <span className="ms-3">{`return greetingInfo;`}</span>
        <br />
        <span>{`}`}</span>
        <br />
        <span>{`let myFunction = Welcome("John");`}</span>
        <br />
        <br />
        <span>{`myFunction("Welcome ")`}</span>
        <br />
        <span>{`myFunction("Hello Mr.")`}</span>
      </code>
      <br />
      <br />
      <code>and the result is :</code>
      <br />
      <code>{myFunction("Welcome ")}</code>
      <br />
      <code>{myFunction("Hello Mr.")}</code>
    </div>
  );
};
