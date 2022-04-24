import React, { useEffect, useState } from "react";

export const DateTime = () => {
  let [date, setDate] = useState(new Date());
  let [houre12, setHoure12] = useState(true);
  let [locale, setLocale] = useState("fa-IR");

  const startTimer = () => {
    let newDate = new Date();
    let parsedDate = new Intl.DateTimeFormat(locale, {
      hour: "numeric",
      day: "numeric",
      year: "numeric",
      month: "long",
      minute: "numeric",
      second: "numeric",
      hour12: houre12,
    }).format(newDate);
    setDate(parsedDate);
  };

  let interval;
  useEffect(() => {
    startTimer();
    clearInterval(interval);
    interval = setInterval(startTimer, 1000);
    return () => clearInterval(interval);
  }, [houre12, locale]);

  return (
    <React.Fragment>
      <p>Date by Intl.DateTimeFormat</p>
      <hr />
      <select
        className="me-2"
        onChange={(e) => setLocale(e.target.value)}
        style={{ height: "30px" }}
      >
        <option value="fa-IR">fa-IR</option>
        <option value="en-US">en-US</option>
        <option value="de-DE">de-DE</option>
      </select>
      <button onClick={() => setHoure12(!houre12)}>
        {houre12 ? "12 H" : "24 H"}
      </button>
      <label
        className="ms-4"
        style={locale.includes("fa") ? { direction: "rtl" } : {}}
      >
        {date.toString()}
      </label>
    </React.Fragment>
  );
};
