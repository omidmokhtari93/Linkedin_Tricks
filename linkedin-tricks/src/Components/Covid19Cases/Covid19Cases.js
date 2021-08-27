import React, { useEffect, useRef, useState } from "react";
import { APICall } from "../xshared/APICall";
import { Number } from "../xshared/Number";

export const Covid19Cases = () => {
  const [countries, setCountries] = useState([]);
  const [all, setAll] = useState(null);
  const [lastdays, setLastDays] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    APICall.post("/get_cases", { days: 1 }, (err, res) => {
      if (res && res.result_code) {
        setCountries(res.data.countries);
        setAll(res.data.all);
        setLastDays(res.data.lastdays);
        setLoading(false);
      }
    });
  }, []);

  const capitalize = ([first, ...str]) => {
    return [first?.toUpperCase(), ...str].join("");
  };
  let loop = 0;
  let counter = 4;
  return (
    <React.Fragment>
      <p>Covid-19 Cases Worldwide</p>
      <hr />
      {loading ? (
        <code>fetching data ...</code>
      ) : (
        <React.Fragment>
          <code>worldwide statistic : </code>
          <div className="row m-0">
            {Object.keys(all || {}).map((x, index) => {
              if (counter === index) {
                loop += 1;
                counter += 4;
              }
              return (
                <div
                  style={{
                    background: loop % 2 ? "#dcdcdc" : "",
                    border: loop % 2 ? "" : "1px solid #dcdcdc",
                  }}
                  key={x}
                  className="col-3 d-flex justify-content-between align-items-center pb-1 pt-1"
                >
                  <span>{capitalize(x)} : </span>
                  <span className="badge rounded-pill bg-primary d-flex align-items-center">
                    {Number.seprateByComma(all[x])}
                  </span>
                </div>
              );
            })}
          </div>
          <select>
            {countries.map((x) => (
              <option value={x.country} key={x.country}>
                {x.country}
              </option>
            ))}
          </select>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};
