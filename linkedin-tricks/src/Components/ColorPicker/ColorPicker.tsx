import React, { ReactElement, useState } from "react";

type colorPickerType = {};

export const ColorPicker = (props: colorPickerType): ReactElement => {
  const [color, setColor] = useState("black");
  return (
    <div>
      <p>Color Picker</p>
      <hr />
      <code>choose a color to see the result : </code>
      <br />
      <input
        type="color"
        onChange={(e) => {
          console.log(e);

          setColor(e.target.value);
        }}
      />
      <br />
      <div className="text-center">
        <b style={{ color: color }} className="bolder">
          THIS TEXT IS FOR COLOR CHANGES TEST
          <br />
          <span>{color.toUpperCase()}</span>
        </b>
      </div>
    </div>
  );
};
