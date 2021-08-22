import React from "react";

export const LinkSpeed = () => {
  const nav = navigator;
  return (
    <React.Fragment>
      <p>Link speed</p>
      <hr />
      <code>const linkSpeed = navigator.connection.downlink</code>
      <br />
      <code className="text-body">
        representing the maximum downlink speed, in megabits per second (Mb/s)
      </code>
      <br />
      <code className="text-body">output is : </code>
      <code>
        {nav && nav.connection
          ? nav.connection.downlink + " megabits per second (Mb/s)"
          : "your browser does not support navigator"}
      </code>
    </React.Fragment>
  );
};
