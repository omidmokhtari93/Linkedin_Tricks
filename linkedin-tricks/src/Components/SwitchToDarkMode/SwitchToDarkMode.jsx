import React, { useState } from "react";

export const SwitchToDarkMode = () => {
  const [filter, setFilter] = useState("");

  const changeMode = () => {
    if (filter) {
      document.body.style.filter = "";
      setFilter("");
    } else {
      document.body.style.filter = "hue-rotate(180deg) invert(1)";
      setFilter("hue-rotate(180deg) invert(1)");
    }
  };

  return (
    <React.Fragment>
      <p>Switch To Dark Mode</p>

      <button onClick={changeMode}>{filter ? "Light" : "Dark"} Mode</button>
    </React.Fragment>
  );
};
