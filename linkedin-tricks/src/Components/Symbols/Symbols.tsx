import React from "react";

export const Symbols = () => {
  const symbols = () => {
    return {
      "~~": ~~1.25655465, //! removing decimal part of number
      "&": 5 & 1, // ! convert numbers to binary and logical AND calculate ==> for example > 1 & 5 === 0001 & 0101 ==> 0001
      "??": "" ?? "omid", //! if left-hand side is null or undefind (no falsy checking)
      "**": 2 ** 5, //! 2 pow 5
    };
  };

  return (
    <React.Fragment>
      <p>What does this symbol mean in JavaScript?</p>
      <hr />
      <code>
        <h2>{`"~~"`}</h2>
        <span className="text-dark">
          "~~" : removing decimal part of number
        </span>
        <br />
        {"example : ~~1.25655465 ==> "}
        {~~1.25655465}

        <hr />
        <h2>{`"&"`}</h2>
        <span className="text-dark">
          {`convert numbers to binary and logical AND calculate ==> for example > 1 & 5 === 0001 & 0101 ==> 0001`}
        </span>
        <br />
        {"example : 5 & 1 ==> "}
        {5 & 1}

        <hr />
        <h2>{`"??"`}</h2>
        <span className="text-dark">
          {`if left-hand side is null or undefind evaluate right-hand side`}
        </span>
        <br />
        {`example : null ?? "omid" ==> `}
        {null ?? "omid"}

        <hr />
        <h2>{`"**"`}</h2>
        <span className="text-dark">{`pow in javascript`}</span>
        <br />
        {`example : 2 ** 5 ==> `}
        {2 ** 5}
      </code>
      <br />
    </React.Fragment>
  );
};
