import React, { useState } from "react";

export const ConvertToInt = () => {
  const [value, setValue] = useState("");

  return (
    <React.Fragment>
      <p>Convert string to int</p>
      <hr />
      <code>const value = '1'</code>
      <br />
      <code>console.log(+value)</code>
      <hr />
      <input
        placeholder="input type='text'"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {value && <code className="ms-2">typeof value : {typeof +value}</code>}
    </React.Fragment>
  );
};
