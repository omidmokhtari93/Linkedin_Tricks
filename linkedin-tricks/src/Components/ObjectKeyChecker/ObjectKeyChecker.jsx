import React from "react";

export const ObjectKeyChecker = () => {
  const obj = {
    obj1: {
      obj2: "omid",
    },
  };
  return (
    <React.Fragment>
      <p>Object Key Checker</p>
      <hr />
      <code>
        <span className="text-dark">{"const obj = {"}</span>
        <br />
        <span className="ms-3 text-dark">{"obj1: {"}</span>
        <br />
        <span className="ms-5 text-dark">{'obj2: "omid",'}</span>
        <br />
        <span className="ms-3 text-dark">{"},"}</span>
        <br />
        <span className="text-dark">{"}"}</span>
        <hr />
        {`obj?.obj1?.obj2 ==> `}
        {`${obj?.obj1?.obj2}`}
        <br />
        {`obj?.obj1?.obj3?.obj4 ==> `}
        {`${obj?.obj1?.obj3?.obj4}`}
      </code>
    </React.Fragment>
  );
};
