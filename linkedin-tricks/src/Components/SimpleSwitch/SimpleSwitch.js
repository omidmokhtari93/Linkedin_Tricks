import React from "react";

export const SimpleSwitch = () => {
  function Switch(i) {
    return arguments[++i];
  }

  const result = Switch(1, "a", "b", "c");

  return (
    <React.Fragment>
      <p>Simple Switch</p>
      <hr />
      <code className="text-body">
        {"function Switch(i) {"}
        <br />
        <span className="ms-4">{"return arguments[++i];"}</span>
        <br />
        {"}"}
        <br />
        {'const result = Switch(1, "a", "b", "c");'}
      </code>
      <br />
      <code>and output is : {result}</code>
    </React.Fragment>
  );
};
