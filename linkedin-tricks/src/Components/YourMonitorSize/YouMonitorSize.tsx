import React, { ReactElement } from "react";

export const YourMonitorSize = (): ReactElement => {
  const { width, height } = window.screen;

  return (
    <React.Fragment>
      <p>How big is your monitor?</p>
      <hr />
      <code>const {`{width, height} = screen`}</code>
      <br />
      <code>and the result is :</code>
      <br />
      <code>
        width : <span className="text-black">{width}px</span>
        <br />
        height : <span className="text-black">{height}px</span>
      </code>
    </React.Fragment>
  );
};
