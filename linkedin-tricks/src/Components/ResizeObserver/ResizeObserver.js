import React, { useRef, useState } from "react";
import { useEffect } from "react";

export const ResizeObserverContainer = () => {
  const textAreaEl = useRef(null);
  const [dimention, setDimention] = useState()
  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect;
      setDimention(`width is ${width}px and height is ${height}px`)
    });

    if (textAreaEl.current) {
      resizeObserver.observe(textAreaEl.current);
    }
  }, []);

  return (
    <React.Fragment>
      <p>Resize Observer</p>
      <hr />
      <code>
        {`const resizeObserver = new ResizeObserver((entries) => {`}
        <br />
        <span className="ms-4">{`const { width, height } = entries[0].contentRect;`}</span>
        <br />
        <span className="ms-4">{`console.log(width ,height)`}</span>
        <br />
        {`});`}
        <br />
        {`resizeObserver.observe(element);`}
      </code>
      <p className="mt-4">
        resize textarea element to see the output :
      </p>
      <code>{dimention}</code>
      <br />
      <textarea ref={textAreaEl} className="w-100"></textarea>
    </React.Fragment>
  );
};
