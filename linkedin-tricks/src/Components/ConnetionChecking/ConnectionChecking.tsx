import React, { useEffect, useState } from "react";

export const ConnectionChecking = () => {
  const [state, setStete] = useState("You are online");
  useEffect(() => {
    window.addEventListener("online", updateConnectionStatus);
    window.addEventListener("offline", updateConnectionStatus);
    return () => {
      window.removeEventListener("online", updateConnectionStatus);
      window.removeEventListener("offline", updateConnectionStatus);
    };
  }, []);

  const updateConnectionStatus = () => {
    if (navigator.onLine) {
      setStete("You are online");
    } else {
      setStete("You are offline");
    }
  };

  return (
    <React.Fragment>
      <p>Network Connection Checker</p>
      <hr />
      <code className="text-body">
        window.addEventListener("online", updateConnectionStatus);
      </code>
      <br />
      <code className="text-body">
        window.addEventListener("offline", updateConnectionStatus);
      </code>
      <br />
      <br />
      <code className="text-secondary">
        {`const updateConnectionStatus = () => {`}
        <br />
        <span className="ms-4">{`if (navigator.onLine) {`}</span>
        <br />
        <span className="ms-5">{`return "You are Online";`}</span>
        <br />
        <span className="ms-4">{`}`}</span>
        <br />
        <span className="ms-4">{`return "You are offline";`}</span>
        <br />
        {`};`}
      </code>
      <br />
      <br />
      <code>
        And output is {"==>"}{" "}
        <span
          className={state.includes("online") ? "text-success" : "text-danger"}
        >
          {state}
        </span>
      </code>
    </React.Fragment>
  );
};
