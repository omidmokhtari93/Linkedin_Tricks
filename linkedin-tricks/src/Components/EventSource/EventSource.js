import React, { useEffect, useState } from "react";

export const EventSourceSample = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    const source = new EventSource("/events");
    source.onmessage = (event) => {
      setData(JSON.parse(event.data));
    };
  }, []);

  return (
    <React.Fragment>
      <p>Event Source Sample</p>
      <hr />
      <code>Sever side time and date with EventSource</code>
      <br />
      {data}
    </React.Fragment>
  );
};
